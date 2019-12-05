export class Products{
    private _id:string;
    private _nom:string;
    private _prix:number;
    private _qte:number;
    private _option:boolean;
    private _im1:string;
    private _im2:string;
    private _tp:string;
    private _dispo:string;

    constructor(private v1:string, private v2:string, private v3: number,private v4:number,private v5:boolean, private v6:string,private v7:string,private v8:string,private v9:string) {
        this._id=v1;
        this._nom=v2;
        this._prix=v3;
        this._qte=v4;
        this._option=v5;
        this._im1=v6;
        this._im2=v7;
        this._tp=v8;
        this._dispo=v9;
    }
    public get nom(): string {
    return this._nom;
    }
    
    public set nom(value: string) {
        this._nom = value;
    }
    
    public get option(): boolean {
        return this._option;
    }
    public set option(value: boolean) {
        this._option = value;
    }
    public get qte(): number {
        return this._qte;
    }
    public set qte(value: number) {
        this._qte = value;
    }
    public get im1(): string {
        return this._im1;
    }
    public set im1(value: string) {
        this._im1 = value;
    } 
    public get im2(): string {
        return this._im2;
    }
    public set im2(value: string) {
        this._im2 = value;
    } 
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    } 
    
    public get prix(): number {
       return this._prix;
    }
    public set prix(value: number) {
       this._prix = value;
    }
    public get tp(): string {
        return this._tp;
    }
    public set tp(value: string) {
        this._tp = value;
    }
    public get dispo(): string {
        return this._dispo;
    }
    public set dispo(value: string) {
        this._dispo = value;
    }
}

