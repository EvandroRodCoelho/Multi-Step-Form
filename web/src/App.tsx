export function App() {

  return (
    <div className="md:max-w-sm">
      <div className="relative w-screen  h-screen md:static md:flex md:justify-center md:items-center">
        <div className="bg-sidebar-mobile bg-black h-1/4 flex items-center bg-cover md:max-w-[50%] md:w-full">
          <div className="flex items-center justify-center w-full  ">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
        <div className="absolute p-3 top-1/4 left-1/2 md:left-0 
        transform -translate-x-1/2 md:translate-x-0  -translate-y-1/4 md:translate-y-0 min-h-5
        bg-zinc-800  min-w-3 md:static md:flex md:justify-center md:items-center md:max-w-3 w-full">
          <div>
            <label htmlFor="">Nome:</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
