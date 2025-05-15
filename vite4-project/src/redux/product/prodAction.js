let INC='inc_type';
let DEC='dec_type';

let incAction=()=>{
    return{ type:INC}
}
let decAction=()=>{
    return{ type:DEC}
}

export {INC,DEC,incAction,decAction};