export class GET {
  static async getWord() {
    try {
      const res = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e)
    }
  }
}

export default GET;
