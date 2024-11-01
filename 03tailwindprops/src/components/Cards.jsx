import React from 'react'

function Cards(props) {
  return (
    <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://th.bing.com/th/id/OIP.nk_z-pKFk1tZd1sXiDFSJwHaEo?w=261&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width="384" height="512">
  </img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        Kidda peeps. {props.username} here.Beginning to really like tailwind as I move forward.I hope this will be beneficial for me in the future.
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {props.username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {props.pos}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Cards