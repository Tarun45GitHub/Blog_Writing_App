import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.AppWriteProjectId)
        .setProject(conf.AppWriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name)
           if (userAccount) {
            //call login method
            return this.loginAccount({email,password})
           } else {
            console.log("account not created")
            return userAccount;
           }
            
        } catch (error) {
            console.log("Appwrite service :: create accout:: error",error);
            throw error;
        }
    }
    async loginAccount({email,password}){
        try {
           const response= await this.account.createEmailPasswordSession(email,password)
           if(response)  console.log("success");
           else  console.log("failure");
           return response;
        } catch (error) {
            console.log("Appwrite service :: login :: error",error);
           throw error; 
        }
    }
    async getCurrentUser (){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
            throw error;
        }
        return null;
    }
    async logoutAccount (){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
            throw error;
            
        }
    }

}

const authService=new AuthService()

export default authService;