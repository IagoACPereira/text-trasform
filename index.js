class TextTransform {
  static upperCase(str) {
    return str.toUpperCase();
  }

  static lowerCase(str) {
    return str.toLowerCase();
  }

  static capitalize(str) {
    str = str
      .toLowerCase()
      .split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
  }

  static capitalizeAll(str) {
    str = str
      .toLowerCase()
      .split(' ')
      .map(item => {
        item = item.split('');
        item[0] = item[0].toUpperCase();
        return item.join('');
      });
    return str.join(' ');
  }
}

module.exports = TextTransform;