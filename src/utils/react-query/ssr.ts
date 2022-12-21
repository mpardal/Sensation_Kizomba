import type { ParsedUrlQuery } from 'node:querystring';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import type { PreviewData } from 'next/types';
import {
  fetchNextEvents,
  getNextEventsQueryKey,
} from '@/hooks/use-next-events';
import { logger } from '@/utils/logger';
import {
  staticPropsRevalidate,
  staticPropsRevalidateError,
} from '@/utils/static-props';

export function initHydration() {
  const queryClient = new QueryClient();

  return {
    queryClient,
    getPropsHydrate: async () => {
      await queryClient.fetchQuery(getNextEventsQueryKey(), () =>
        fetchNextEvents(),
      );
    },
  };
}

export function withServerQuerySSR<
  P extends Record<string, unknown> = Record<string, unknown>,
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
>(
  cb: (
    ctx: GetServerSidePropsContext,
    queryClient: QueryClient,
  ) => Promise<GetServerSidePropsResult<P>> | GetServerSidePropsResult<P>,
  onErr?: (err: unknown) => Promise<GetServerSidePropsResult<P>>,
): GetServerSideProps<P & { dehydratedState: unknown }, Q, D> {
  return async (
    ctx: GetServerSidePropsContext<Q, D>,
  ): Promise<GetServerSidePropsResult<P & { dehydratedState: unknown }>> => {
    const { queryClient, getPropsHydrate } = initHydration();

    try {
      const result = await cb(ctx, queryClient);

      if ('notFound' in result || 'redirect' in result) {
        return result;
      }

      await getPropsHydrate();

      const props = result.props as P;

      return {
        ...result,
        props: {
          ...props,
          dehydratedState: dehydrate(queryClient),
        },
      };
    } catch (err) {
      logger.error('prefetch error', err);

      if (onErr) {
        const result = await onErr(err);

        if ('redirect' in result || 'notFound' in result) {
          return result;
        }

        const props = result.props as P;

        return {
          ...result,
          props: {
            ...props,
            dehydratedState: dehydrate(queryClient),
          },
        };
      }

      return {
        notFound: true,
      };
    }
  };
}

export function withStaticQuerySSR<
  P extends Record<string, unknown> = Record<string, unknown>,
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
>(
  cb: (
    ctx: GetStaticPropsContext,
    queryClient: QueryClient,
  ) => Promise<GetStaticPropsResult<P>> | GetStaticPropsResult<P>,
  onErr?: (err: unknown) => Promise<GetStaticPropsResult<P>>,
): GetStaticProps<P & { dehydratedState: unknown }, Q, D> {
  return async (
    ctx: GetStaticPropsContext<Q, D>,
  ): Promise<GetStaticPropsResult<P & { dehydratedState: unknown }>> => {
    const { queryClient, getPropsHydrate } = initHydration();

    try {
      const result = await cb(ctx, queryClient);

      if ('notFound' in result || 'redirect' in result) {
        return result;
      }

      await getPropsHydrate();

      const props = result.props;

      return {
        ...result,
        revalidate: result.revalidate || staticPropsRevalidate,
        props: {
          ...props,
          dehydratedState: dehydrate(queryClient),
        },
      };
    } catch (err) {
      logger.error('prefetch error', err);

      if (onErr) {
        const result = await onErr(err);

        if ('redirect' in result || 'notFound' in result) {
          return result;
        }

        const props = result.props;

        return {
          ...result,
          revalidate: result.revalidate || staticPropsRevalidateError,
          props: {
            ...props,
            dehydratedState: dehydrate(queryClient),
          },
        };
      }

      return {
        notFound: true,
        revalidate: staticPropsRevalidateError,
      };
    }
  };
}
