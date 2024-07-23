
function MyButton({resetTile,algo}) {
  
  return (
    <div className="controls mb-2 w-full justify-center items-end flex bg-white-700 p-4">
        <div className="flex space-x-4">
          <button className="btn2 btn-hover2 " onClick={resetTile}> Reset Piles</button>
          <button className="btn2 btn-hover2 " onClick={algo}> Sort Piles</button>

          <select name="Speed" id="cars" className="text-green-900 rounded-xl p-3">
            <option value="saab">Speed</option>
            <option value="volvo" onClick={()=>(setSpeed(10))}>slow</option>
            <option value="saab">medium</option>
            <option value="mercedes">fast</option>
          </select>
        </div>
      </div>
  )
}

export default MyButton;