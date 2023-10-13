export class consoleColor {
    static green(msg:string | number){
        console.log(`${msg}`, 'color:green');
    }
    static red(msg:string | number){
        console.log(`${msg}`, 'color :red');
    }
    static blue(msg:string | number){
        console.log(`${msg}`, 'color : blue');
    }
    static yellow(msg:string | number){
        console.log(`${msg}`, 'color : yellow');
    }
}
export class consoleBackground {
    static green(msg:string | number){
        console.log(`${msg}`, 'background : green');
    }
    static red(msg:string | number){
        console.log(`${msg}`, 'background : red');
    }
    static blue(msg:string | number){
        console.log(`${msg}`, 'background : blue');
    }
    static yellow(msg:string | number){
        console.log(`${msg}`, 'background : yellow');
    }
}
export class consoleCustom {
    static set(msg:string | number, color?:string, background?:string){
        console.log(`%c${msg}`, `background: ${background}; color: ${color}`);
    }
}