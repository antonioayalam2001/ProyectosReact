export const LevelSelector = ( { levelSelection , level } ) => {
      return (
          <div className="level-selector">
                <h1>Word Association App</h1>
                <p>Please select a level to start with</p>
                <select name="levelSelection" id="levelSelection" value={ level } onChange={ e => {
                      console.log ( e.target.value )
                      return levelSelection ( e.target.value )
                } }>
                      <option value={null} className="level">Select a Level</option>
                      <option value="1" className="level">Level 1</option>
                      <option value="2" className="level">Level 2</option>
                      <option value="3" className="level">Level 3</option>
                      <option value="4" className="level">Level 4</option>
                      <option value="5" className="level">Level 5</option>
                </select>

          </div>
      )
}