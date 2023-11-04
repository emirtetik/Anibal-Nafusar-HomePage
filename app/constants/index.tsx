export function NavData(navName:string) {
    let id = "id" + Math.random().toString(16).slice(2);
    let name = navName;
    let url =
      "/" +
      navName
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
  
    return { id, name, url };
  }
  