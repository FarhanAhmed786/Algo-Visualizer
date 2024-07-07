
function MyButton({resetTile,algo}) {
  
  return (
    <div className="controls mb-2 w-full justify-center items-end flex bg-white-700 p-4">
        <div className="flex space-x-4">
          <button className="btn2 btn-hover2 " onClick={resetTile}> Reset Piles</button>
          <button className="btn2 btn-hover2 " onClick={algo}> Sort Piles</button>
        </div>
      </div>
  )
}

export default MyButton;