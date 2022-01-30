const Notes = require('./notes.model')

const createNote = async (req, res)=>{
   try {
       const note = await Notes.create(req.body)
       res.status(200).json({note})
   } catch (error) {
       res.status(400).json("something went wrong");  
       
   }
   
 }

const getAllNotes = async(req,res)=>{
    try {
        const notes = await Notes.find({})
        res.status(200).json({notes})
        
    } catch (error) {
        res.status(400).json("something went wrong");  
        
    }

}
const getNote = async (req,res)=>{
    try {
        const {id:noteId}=req.params
        const note = await Notes.findOne({_id:noteId})
        if(!note){
            return res.status(400).json('the id on that note does not exists')
        }
        return res.status(200).json({note})
        
    } catch (error) {
         res.status(400).json("something went wrong");  
    }
}
const deleteNote = async(req,res)=>{
    const{id:noteId}=req.params
    try {
        const note = await Notes.findByIdAndDelete({ _id: noteId });
        if(!note){
            return res.status(400).json("the id on that note does not exists");
        }
         return res.status(200).json({ note });
    } catch (error) {
         res.status(400).json("something went wrong");  
        
    }
}
const updateNote= async(req,res)=>{
    const {id:noteId}=req.params
    try {
        const note = await Notes.findByIdAndUpdate(noteId, req.body)
        if(!note){
            return res.status(400).json("the id on that note does not exists");
        }
         return res.status(200).json({ note });
        
    } catch (error) {
        res.status(400).json("something went wrong"); 
        
    }
}

module.exports = {
  createNote,
  getAllNotes,
  getNote,
  deleteNote,
  updateNote,
};
