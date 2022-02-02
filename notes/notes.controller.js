const Notes = require('./notes.model')

const createNote = async (req, res)=>{
    //console.log('user', req.user);
    const {user} = req
   try {
       const newNote = {...req.body, userId: user._id}
       const note = await Notes.create(newNote)
       return res.status(200).json({note})
   } catch (error) {
       return res.status(400).json("something went wrong");    
   }  
 }

const getAllNotes = async(req,res)=>{
    try {
        const notes = await Notes.find({})
        return res.status(200).json({notes})     
    } catch (error) {
        return res.status(400).json("something went wrong");    
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
         return res.status(400).json("something went wrong");  
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
         return res.status(500).json("something went wrong");  
        
    }
}
const updateNote= async(req,res)=>{
    const {id:noteId}=req.params
    try {
        const note = await Notes.findByIdAndUpdate(noteId, req.body)
        if(!note){
            return res.status(400).json("the id on that note does not exists");
        }
         return res.status(200).json('note was deleted');
        
    } catch (error) {
        return res.status(500).json("something went wrong"); 
        
    }
}

const getNotebyUser = async(req, res)=>{
    const{usedId}=req.params
    try {
        const note = await Notes.find({ usedId });
        if(!note){
             return res.status(400).json("the id on that note does not exists");
        }
        return res.status(200).json({note})
    } catch (error) {
         return  res.status(500).json("something went wrong"); 
    }
}


module.exports = {
  createNote,
  getAllNotes,
  getNote,
  deleteNote,
  updateNote,
  getNotebyUser,
};
