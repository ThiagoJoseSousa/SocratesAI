export const assert = (condition:boolean, expectedResult:string) => {
    if (condition){
        console.log(`The test of "${expectedResult}" succeded!`)
    } else{
        console.error(`The test of "${expectedResult}" failed!`)
    }
}
