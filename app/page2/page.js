
const Page2 = () => {
    return (
      <div>
        
           <form class="max-w-2xl bg-orange-600 rounded-lg border p-3 mx-auto mt-20">
            <p className="text-xl font-medium">Supabase</p>
      <div class="px-3 mb-2 mt-2">
          <textarea placeholder="comment" class="w-full bg- rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
      </div>
      <div class="flex justify-end px-4">
          <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-blue-700" value="Comment"/>
      </div>
  </form>
  
      </div>
    )
  }
  
  export default Page2
  