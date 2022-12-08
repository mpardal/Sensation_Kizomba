export function cityKeyToCityName(key: string): string {
  switch (key) {
    case 'nantes':
      return 'Nantes';
    case 'bordeaux':
      return 'Bordeaux';
    case 'le-mans':
      return 'Le Mans';
    case 'orleans':
      return 'Orléans';
    default:
      return '';
  }
}
