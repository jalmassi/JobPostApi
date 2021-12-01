import { Request, Response } from "express";
import { JobPost } from "../models/JobPost";

export const jobPosts = async (req: Request, res: Response) => {
  try {
    const response = await JobPost.forge()
      .fetchAll()
      .then((jobposts: any) => {
        const res = {
          success: true,
          data: jobposts,
        };
        return res;
      });
  } catch (e: unknown) {
    console.error(`Failed to fetch the jobposts: ${e}`);
  }
};


export const getAllJobPosts = async (req: Request, res: Response) =>{
    try{
       const response = await JobPost
          .forge()
          .fetchAll()
          .then(function(data: any){
              const res = {
                   success: true,
                   data: data
              }
              return res;
          })
          .catch((error: Error)=>{
              const res = {
                  success: false,
                  error: error
              }
              return res
          })

         res.json(response)


    }
     catch(e){

        console.log(`Failed to fetch the data: ${e}`)
     }
}



export const createJobPost = async (req: Request, res: Response) =>{
    try{

        const { id, title, description, location, hourlyPayRate } = req.body

      const response = await JobPost.forge({
           title: title,
            description: description,
            location: location,
            hourlyPayRate: hourlyPayRate
      }).save()
        .then(function(data: any){
            const res = {
                success: true,
                data: data,
                message: "created successfully"
        }
        return res;
        })
        .catch((error: Error)=>{
            const res = {
                success: false,
                error: error
            }
            return res
        })
     res.json(response)

    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     }

}




export const getJobPost = async (req: Request, res: Response) =>{
    try{
      const { id } = req.params
        const  response = await JobPost.forge({
            'id' : id
        }).fetch()
        .then(function(data: any){
            if(data.length !=0){
                const res = {
                    success: true,
                    data: data
                    }
                    return res;
              }
              else{
                  res.status(404).send({
                      success: false,
                      message: 'Record not found with id:' + id
                  })
              }
          })
          .catch((error: Error)=>{
            const res = {
                success: false,
                error: error
            }
            return res
        })
        res.json(response)

    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     }

}



export const update = async (req: Request, res: Response) =>{
    try{
        const { id, title, description, location, hourlyPayRate } = req.body
        await JobPost
          .where('id',id)
          .fetch()
          .then(function(jobposts: any){
               jobposts
                  .save({
                    title: title,
                    description: description,
                    location: location,
                    hourlyPayRate: hourlyPayRate
                  })
                  .then(function(data: any){
                      const response ={
                          success: true,
                          data : data,
                          message: "successfully Updated"
                      }
                      res.json(response)
                  })
                  .catch((error: Error)=>{
                    const res = {
                        success: false,
                        error: error
                      }
                      return res;
                   })

          })
          .catch((error: Error)=>{
            const res = {
                success: false,
                error: error
              }
              return res;
           })
    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     }
};

export const deleteJobPost = async (req: Request, res: Response) =>{
    try{
        const { id } = req.params
        const response = await JobPost
               .where('id',id)
               .destroy()
               .then( function(data: any){
                   const res = {
                       success : true,
                       message: `id ${id}  Deleted successfully`
                   }
                   return res;
               })
               .catch((error: Error)=>{
                const res = {
                    success: false,
                    error: error
                  }
                  return res;
               })

             res.json(response)

    }
    catch(e){

        console.log(`No Record Found: ${e}`)
     }
}