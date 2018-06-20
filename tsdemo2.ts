class bird{
    age: number;
    name: string;   

   public static display(x:number, y:string){
        console.log(y + " has "+x +" wings");
    }
}
bird.display(2 , "pigeon");  