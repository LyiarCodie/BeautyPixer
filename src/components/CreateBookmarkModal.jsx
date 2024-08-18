import { Star } from '@phosphor-icons/react';

/** 
 * @param {{
*  open: boolean, 
*  onCancelClick: () => void,
*  onSaveClick: () => void,
*  onURLInputChange: () => void,
*  onTitleInputChange: () => void
*  bookmarkTitleState: string, 
*  bookmarkURLState: string,
* }} param0 
* */
export const CreateBookmarkModal = ({open, onCancelClick, onSaveClick, onTitleInputChange, onURLInputChange, bookmarkTitleState, bookmarkURLState}) => {
   return (
       <>
           <div className={`backOverlay ${open && "visible"}`}></div>
           <dialog className={`createBookmarkModal ${open && "visible"}`} open>
               <span className='modalTitle'><Star size={20} /> Add Bookmark</span>
               <div className="input-block">
                   <label>Title</label>
                   <input 
                       type="text" 
                       placeholder="@lyiar_u / X" 
                       value={bookmarkTitleState} 
                       onChange={onTitleInputChange} 
                   />
               </div>

               <div className="input-block">
                   <label>URL</label>
                   <input 
                       type="text" 
                       placeholder="https://x.com/lyiar_u" 
                       value={bookmarkURLState} 
                       onChange={onURLInputChange}
                   />
               </div>

               <div className="input-block buttons-block">
                   <button onClick={onCancelClick}>Cancel</button>
                   <button onClick={onSaveClick}>Save</button>
               </div>
           </dialog>
       </>
   )
}