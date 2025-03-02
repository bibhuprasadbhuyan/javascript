//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//the key is always unique in map collection

// const map1 = new Map();

// map1.set('name', 'bibhu prasad');
// map1.set('dm', 'divya');
// console.log(map1.get('name'));
// console.log(map1.size);
// map1.delete("dm")
// console.log(map1.size);

// const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// console.log(myMap.keys());

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 9 },
//   { name: "bananas", type: "fruit", quantity: 5 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 12 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const restock = { restock: true };
// const sufficient = { restock: false };

// const result = Map.groupBy(inventory, ({ quantity })=> {
//     quantity < 6 ? restock :sufficient
// })

// console.log(result.get(restock));


// clear() it will clear the whole map

    // const map1 = new Map(
    //   [
    //     ["na", 'bibhu'],
    //     ["da",'divya']
    //   ]
    // )
    // map1.clear()

    // console.log(map1.size)
   
// delete() it will remove the specific key from the map

    // const exMap = new Map([
    // ['age', 45],
    // ['salary',30000]
    // ])

    // console.log(exMap.delete('salary'));
    // console.log(exMap.values());
    
// entries() it will return map iterator object

    // const newMap = new Map()

    // newMap.set({}, 'i dont know')
    // newMap.set('name', 'bibhu')

    // const iterMap = newMap.entries()

    // console.log(iterMap.next().value);
    // console.log(iterMap.next().value);

// forEach() it executes a provided function once per each key/value pair in this map

    // function logMapElements(key,val,map) {
    //       console.log(`m [${key}] = ${val}`)  
    // }
    
    // let newMap = new Map([
    //     ["name", 'bibhu'],
    //     ["work", {
    //         'ofice': 'happiest minds',
    //         'hobbies':'play guitar'  
    //     }],
    //     ["target",null]
    // ])

    // newMap.forEach((logMapElements))
    
// get() returns a specified element from this map and if its a boject then it will retur  obj reference

    // let data = new Map();

    // data.set("life", "goal");
    // console.log(
    // data.get("life")
    // );
    
// has() it will return a boolean value by cheking if the element is avilable or not

    // let testMap = new Map()
    // testMap.set('name', "bibhu")
    // console.log(testMap.has("name"));
    
// keys() it returns a new map iterator object that contains the keys for each element in this map

    //     let testMap = new Map([
    //         ['name','bibhu'],
    //         ['mamu','dipu'],
    //     ])
            
    //  const keyIter = testMap.keys()
        
    // console.log(keyIter.next().value);
    // console.log(keyIter.next().value);
    
// set() adds or updates an entry in this map with a specified key and a value

    // let newMap = new Map();
    // newMap.set('age', 30)
    // newMap.set('age', 32)
    // console.log(newMap.get('age'));
    
// values() it will return all the  value as  new map itterator objcet as per insertion order

    // let valMap = new Map();
    // valMap.set('name', 'bibhu').set('age', 30).set('occupation', 'software engineer');

    // let getVal = valMap.values()
    // console.log(getVal.next());
    // console.log(getVal.next());
    // console.log(getVal.next());

    // for (let [key, val] of valMap.entries()) {
    //     console.log(`${key} as ${val}`);
        
    // }
    
//[symobl.itterato]() it return map itterator objcet as similar as entries

    // let valMap = new Map();
    // valMap.set('name', 'bibhu').set('age', 30).set('occupation', 'software engineer');
    // let itterator1 = valMap[Symbol.iterator]();

    // for (let [key,val] of itterator1) {
    //     console.log(val);
    // }

// size() it will return size of the map 

    // let valMap = new Map();
    // valMap.set('name', 'bibhu').set('age', 30).set('occupation', 'software engineer');
    // console.log(valMap.size);

    












    


    





