import conf from "../conf/conf";
import { Client,Databases, ID, Query,Storage } from "appwrite";

export class Service{
    client=new Client();
    database;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.AppWriteUrl)
            .setProject(conf.AppWriteProjectId);
        this.database=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost({title,slug,content,featureImage,status,userId}){
       try {
            return await this.database.createDocument(
                conf.AppWriteDatabaseId,
                conf.AppWriteCollectionId,
                slug,
                {title,content,featureImage,status,userId}
            )
       } catch (error) {
        console.log("appWrite service::createPost::error",error);
        
       }
    }

    async updatePost(slug, {title,content,featureImage,status}){
        try {
            return await this.database.updateDocument(
                conf.AppWriteDatabaseId,
                conf.AppWriteCollectionId,
                slug,
                {title,content,featureImage,status} 
            )
            
        } catch (error) {
            console.log("appWrite service::updatePost::error",error);
        }
    }

    async deletePost(slug){
        try {
             await this.database.deleteDocument(
                conf.AppWriteDatabaseId,
                conf.AppWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("appWrite service::deletePost::error",error); 
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.AppWriteDatabaseId,
                conf.AppWriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("appWrite service::getPost::error",error); 
            return false;
        }
    }

    async getAllPost(query=[Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.AppWriteDatabaseId,
                conf.AppWriteCollectionId,
                query
            )
            
        } catch (error) {
            console.log("appWrite service::deletePost::error",error); 
            return false;
        }
    }

    //file management
    async UploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.AppWriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appWrite service::uploadFile::error",error); 
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.AppWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appWrite service::uploadFile::error",error); 
            return false;
        }
    }

    async getFilepreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.AppWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appWrite service::uploadFile::error",error); 
            return false;
        }
    }

}

export const service =new Service(); 
export default Service;