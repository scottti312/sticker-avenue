function hashCode(string: string): number {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      hash = ((hash<<5)-hash)+code;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

export default hashCode