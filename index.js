console.log("working");

const dataset1 = [13, 1, 5, 8, 6];
const dataset2 = [
  {
    Name: "Bonnie Jennings",
    age: 50,
    occupation: "Driver",
  },
  {
    Name: "Aysha Mathis",
    age: 27,
    occupation: "Teacher",
  },
  {
    Name: "Tianna Dorsey",
    age: 35,
    occupation: "Player",
  },
  {
    Name: "Fleur Chandler",
    age: 49,
    occupation: "Teacher",
  },
  {
    Name: "Imogen Robinson",
    age: 60,
    occupation: "Driver",
  },
  {
    Name: "Sienna Zuniga",
    age: 17,
    occupation: "Athlete",
  },
  {
    Name: "Kimberley Petty",
    age: 50,
    occupation: "Driver",
  },
  {
    Name: "Elizabeth Donaldson",
    age: 22,
    occupation: "Athlete",
  },
  {
    Name: "Priya Haines",
    age: 50,
    occupation: "Athlete",
  },
  {
    Name: "Claudia Glenn",
    age: 50,
    occupation: "Architect",
  },
];



//  1  Write a function to sort,
// a. sort data set 1 by ascending order
//bubble sort
function bublesort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}








console.log('=================================================question 1================================================================================================')

let a1 = bublesort(dataset1);
 console.log('sort data set 1 by ascending order',  a1)
function sortbykey(array, key) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1][`${key}`] > array[i][`${key}`]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

//b . sort data set 2 by age in ascending order

console.log('sort data set 2 by age in ascending order===>',sortbykey(dataset2, "age"));

//c. sort data set 2 by name in ascending order

console.log('sort data set 2 by name in ascending order====>',sortbykey(dataset2, "Name"));















console.log('====================================================question 2=============================================================================================')

//2. Write a function to filter list of objects

//a. Filter dataset 2 with age less than 38

// sol 1

let age = dataset2.filter((item) => item.age < 38);

console.log( "age less than 38==> solution 1",age);

//sol 2
function Customfilter(arr, filterFunc) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}

console.log(
  "age less than 38 solution 2",  Customfilter(dataset2, (item) => item.age < 38)
);









console.log('========================================================= question 3========================================================================================')

//3. Transform an array

//a. Add a new field called “date of birth” to each object in dataset2 and calculate approximate date of birth from their age.

// sol 1

let ans = dataset2.map((item, index) => {
  item.dateofbirth = new Date(item.age, 0, 1);
  return item;

});
console.log( `a. Add a new field called “date of birth” to each object in dataset 2 and calculate
approximate date of birth from their age.===>` , ans)













console.log('========================================================== question 4=======================================================================================')

//4.Write a function to group list of objects

//a. Group dataset 2 by occupation

//sol 1

let Groupby = dataset2.reduce((acc, item) => {
  if (!acc[item.occupation]) {
    acc[item.occupation] = [];
  }
  acc[item.occupation].push(item);
  return acc;
});

console.log(`Group dataset 2 by occupation====>`,Groupby);













console.log('=================================================================question 5================================================================================')

//5. Write a function to find the average age of each occupation

//a. DataSet 1

let average = dataset1.reduce((acc, item) => {
  acc += item;
  return acc / dataset1.length;
});

console.log( 'average in DataSet 1 ' , average);

let min = dataset1.reduce((acc, item) => {
  if (acc > item) {
    acc = item;
  }
  return acc;
});

console.log('min in DataSet 1 ',  min)

let max = dataset1.reduce((acc, item) => {
  if (acc < item) {
    acc = item;
  }
  return acc;
});

console.log('max in DataSet 1 ',max);
//b. DataSet 2 min, max & average of age field

console.log(`b. DataSet 2 min age field====>`, sortbykey(dataset2, "age")[0]);
console.log(
  `b. DataSet 2 max age field====>`,
  sortbykey(dataset2, "age")[dataset2.length - 1]
);

let averagebykey = (dataset2, key) => {
  console.log(dataset2.length);
  let avgage = 0;
  for (let i = 0; i < dataset2.length; i++) {
    avgage += dataset2[i][`${key}`];
  }
  return avgage / dataset2.length;
};

console.log(`Amswer 5,b. DataSet 2 average age is ====>`, averagebykey(dataset2, "age"));














console.log('=================================================================question 6================================================================================')

//6. Write a function to calculate total records under each occupation for dataset 2

function totalRecordsUnderEachOccupation(arr) {
  let totalRecords = arr.reduce((acc, item) => {
    if (!acc[item.occupation]) {
      acc[item.occupation] = 0;
    }
    acc[item.occupation] += 1;
    return acc;
  }, {});
  return totalRecords;
}

console.log(
  "total records under each occupation for dataset 2",
  totalRecordsUnderEachOccupation(dataset2)
);
