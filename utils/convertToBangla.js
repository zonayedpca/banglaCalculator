const convertToBangla = input => {
  return String(input).split('').map(oneOutput => {
    switch (oneOutput) {
      case '0':
        return '০';
      case '1':
        return '১';
      case '2':
        return '২';
      case '3':
        return '৩';
      case '4':
        return '৪';
      case '5':
        return '৫';
      case '6':
        return '৬';
      case '7':
        return '৭';
      case '8':
        return '৮';
      case '9':
        return '৯';
      case 'C':
        return 'ক্লিন';
      case '>':
        return 'ব্যাক';
      default:
        return oneOutput;
    }
  }).join('');
}

export { convertToBangla };
