Given an input string and an alphabet of letters, find the smallest substring in the input that contains each letter of the alphabet at least once.

Examples:

alphabet -> [ 'a', 'b', 'c' ]
input -> 'abbacca'
output -> 'bac'

alphabet -> [ 'a', 'b', 'c' ]
input -> 'abbaacca'
output -> 'baac'

---

// O(vertexCount*k^2)
function smallestSubstring(alphabet,str){
    var ini=0;
    var end=alphabet.length;
    var satisfied = false;
    var candidates = [];
    while( end<= str.length ){
        if(doesSatisfy(str,ini,end,alphabet)){         //O(vertexCount*k)
            while(doesSatisfy(str,ini,end,alphabet)){  //O(vertexCount*k^2)
                ini++;
            } 
            candidates.push(str.substring(ini-1,end));
        } else { 
            end = end+1;
        }

    }
    if(candidates.length === 0){
        return ""; //not found
    }
    var retVal = candidates[0];
    for(var i=1;i<candidates.length;i++){               //O(k)
        if(retValue.length>candidate[i].length){
            retValue = candidate[i];
        }
    }
    return retValue;
}

//vertexCount = size of alphabet
//k = size of input string

function doesSatisfy(str,ini,end,alphabet){   //O(vertexCount*k)
    for(var i=0;i<alphabet.length;i++){
        var index=str.indexOf(alphabet[i],ini); // 2
        if(index===-1 || index >= end || index < ini) {
            return false;
        }
    }   
    return true;
}

doesSatisfy("abaa",0,4,"ab") //true
doesSatisfy("abaa",0,1,"ab") //false
doesSatisfy("abaa",1,2,"ab") //false
doesSatisfy("abaa",1,3,"ab") //true