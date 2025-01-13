// refer notes as well

// finally block humesha chalta hai

// It is typically used for cleanup tasks like closing connections or releasing resources.
// let suppose humne printer machine ka access apne pass leke rakha hai ki hum printer se abhi kaam kar rahein hai and koi aur abhi kaam na kare, uske baad humara code to try...catch me aakar exception me chala gaya, hum printer ka access operating system ko vapas dena bhool gaye, ab lets say 5 ghante ho gye hai and humara program to kabka crash ho chuka hai aur saare program jinko printer chahiye tha vo saare printer ka wait kar rahein hai ki humne vo control vapas nahi diya
// is type me jab bhi hum koi bhi aisi resources ko access kar rahein hai jo humko cleanup karna zaruri hai, toh hum finally block me cleanup wale kaam ko kar sakte hai


// agar hum try...catch se kuch return bhi kar rahein hai to bhi finally block chalta hai
let parseStringtoJSON = (jsonString) => {
    try {   
        return JSON.parse(jsonString);
    } catch (error) {      
        console.log('Error occured');
        console.log(error.message);
        return {};      // return empty object if error occurs
    } finally {
        console.log('Finally');
        // return {b: 1};
    }
}
// try...catch se attach agar finally hai and catch kuch return kar raha hai, is case me return ka expression evaluate to ho jayega but evaluate karne ke baad pehle jayega finally me, then finally ka code execute karne ke baad vapas ayega fir value ko return karega. finally ki priority return se bhi jyada hai. 
// agar finally bhi kuch return kar raha hai then iske pehle jitne bhi return statements hai sab ignore ho jayenge.
// finally se generally hum kuch return nahi karte vaise.

let jsonString = "{'A':1}";         // invalid json string "{'A':1}" 
// let jsonString = '{"A":1}';      // valid json string


let newObj = parseStringtoJSON(jsonString);
console.log(newObj);