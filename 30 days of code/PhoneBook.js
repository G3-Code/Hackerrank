function processData(input) {
    //Enter your code here
    let inputData = input.split("\n");
    let myPhoneBook = new phoneDirectory();
    for (let i=0; i<parseInt(inputData[0]);i++){
      myPhoneBook.add((inputData[i+1].split(" "))[0],(inputData[i+1].split(" "))[1]);
    }

    for (let i=parseInt(inputData[0])+1; i<inputData.length; i++) {
      console.log(myPhoneBook.find(inputData[i]));
    }
    //console.log(myPhoneBook.phoneBook);

}

function phoneDirectory() {
  this.phoneBook = [];

  this.add= function(key, value) {
    if (key && value) {
      this.phoneBook.push({name:key, number:value});
    }
    return this.phoneBook;
  }

  this.find = function(key){
    const distinctNames = [...new Set(this.phoneBook.map(x => x.name))];
    if (distinctNames.includes(key)){
      let phoneRecord = this.phoneBook.filter(record => {
        return record.name === key;
      });
      return (`${phoneRecord[0].name}=${phoneRecord[0].number}`);
    } else {
      return "Not found";
    }
  }
}

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry");
