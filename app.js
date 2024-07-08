
const input1 = ["flower","flow","flight"]
const input2 = ["dog","racecar","car"]
const input3 = ["duck","dog","dinner"]

main()

function main(){
    let prefix = getPrefixFromStringArray(input1)
    console.log(prefix)
}

function getPrefixFromStringArray(str_arr){
    let max_prefix = ""
    for(let str of str_arr){
        let max_char = 0
        for(let i = 0; i < str.length ; i++ ){
            let count = 1
            let tmp_prefix = str.slice(0,i+1)
            //1st way
            count = str_arr.filter((_,_i) => i !== _i).reduce((count,item) => item.startsWith(tmp_prefix) ? count+1 : count ,count)
            //2nd way
            // for(let j = 0 ; j < str_arr.length ; j++){
            //     if(i === j) continue
            //     if(str_arr[j].startsWith(tmp_prefix)){
            //         count++
            //     }

            // }
            //if the sample prefix matches all items in array
            if(count === str_arr.length && tmp_prefix.length > max_char){
                max_char = tmp_prefix.length
                max_prefix = tmp_prefix
            }
        }
    }
    return max_prefix
}