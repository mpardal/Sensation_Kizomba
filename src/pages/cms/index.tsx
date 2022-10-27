import { FormatBold } from '@mui/icons-material';
import { AppBar, Button, TextField, Toolbar } from '@mui/material';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useFormik } from 'formik';
import { z } from 'zod';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PageContainer from '../../components/page-container';
import { toFormikValidationSchema } from '../../utils/zod-formik-adapter';
import type { NextPageWithLayout } from '../../components/layout';

const EventObject = z.object({
  title: z.string(),
  address: z.string(),
  dj: z.string(),
  teacher: z.string(),
  city: z.enum(['Nantes', 'Bordeaux', 'Le Mans', 'Orléans']),
  date: z.object({
    from: z.string(),
    to: z.string().optional(),
  }),
});

const Cms: NextPageWithLayout = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌍</p>',
    onUpdate: ({ editor: cEditor }) => {
      console.log(cEditor.getHTML()); // eslint-disable-line no-console
    },
  });

  const { handleSubmit, handleChange, handleBlur } = useFormik<
    z.infer<typeof EventObject>
  >({
    initialValues: {
      title: '',
      address: '',
      dj: '',
      city: 'Nantes',
      teacher: '',
      date: {
        from: '',
        to: '',
      },
    },
    validationSchema: toFormikValidationSchema(EventObject),
    onSubmit: () => {
      // console.log(values);
    },
  });

  // console.log(editor?.can());

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        label="Ville"
        name="city"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Titre"
        name="title"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Adresse"
        name="address"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Dj"
        name="dj"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Professeur(s)"
        name="teacher"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Du"
        name="dateFrom"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <TextField
        label="Au"
        name="dateTo"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <span className="text-slate-400">Contenu</span>
      <div>
        <AppBar className="rounded-tl-lg rounded-tr-lg" enableColorOnDark>
          <Toolbar variant="dense">
            <Button
              color="inherit"
              onClick={(): void => {
                editor?.chain().focus().toggleBold().run();
              }}
              startIcon={<FormatBold />}
              variant={!editor?.isActive('bold') ? 'outlined' : 'contained'}
            >
              Gras
            </Button>
          </Toolbar>
        </AppBar>
        <EditorContent
          className="rounded-bl-lg rounded-br-lg border-primary-400 p-4 border"
          editor={editor}
        />
      </div>
    </form>
  );
};

Cms.Layout = function CmsLayout(page) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer>{page}</PageContainer>
      <Footer />
    </div>
  );
};

export default Cms;
