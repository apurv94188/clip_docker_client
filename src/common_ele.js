
function ClipSearch(t_props) {

      return (
            <div className='divSearchClip'>
                  <h2>Search Clip by Name</h2><br/><br/>
                  <label>Clip Name: </label>
                  <input type='text' name='txtFieldClipName'></input><br/><br/>
                  <button className="buttonSubmitClip" onClick={t_props.submitHandler}>Search Clip</button>
            </div>
      );
}


function ClipAdd(t_props) {

      return (
            <div className="divClipAdd">
                  <h2>Add Clip</h2>
                  <label>Clip Name: </label>
                  <input type='text' className="txtFieldClipName"></input><br/>
                  <label>Clip Content: </label>
                  <input type='textarea' name='txtareaClipContent'></input><br/><br/>
                  <button className="buttonSubmitClip" onClick={t_props.submitHandler}>Submit New Clip</button>
            </div>
      );
}

export {ClipSearch, ClipAdd};