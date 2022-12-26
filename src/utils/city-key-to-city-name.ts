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
    case 'rennes':
      return 'Rennes';
    default:
      return '';
  }
}

export function cityNameForPageTitle(cityName: string): string {
  switch (cityName) {
    case 'Nantes':
      return 'à Nantes';
    case 'Bordeaux':
      return 'à Bordeaux';
    case 'Le Mans':
      return 'au Mans';
    case 'Orléans':
      return 'à Orléans';
    case 'Rennes':
      return 'à Rennes';
    default:
      return '';
  }
}
