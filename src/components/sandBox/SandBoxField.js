//import modules
import { useStore } from 'effector-react'

//import components
import { $sandbox } from 'features/constructor'

export const SandBoxFielld = () => {
  //sandbox state
  const sandbox = useStore($sandbox)

  const sandboxField = sandbox.map((item) => {
    if (item.title === 'Headline') {
      return (
        <div
          className="w-full cursor-pointer mb-3 h-20 flex items-center justify-center font-bold text-xl"
          key={item.id}
        >
          {item.value}
        </div>
      )
    }

    if (item.title === 'Paragraph') {
      return (
        <div key={item.id} className="w-full cursor-pointer mb-3 text-center text-[#97AACD]">
          <div className="whitespace-normal">{item.value}</div>
        </div>
      )
    }

    if (item.title === 'Button') {
      return (
        <div key={item.id} className="w-full  mb-3 flex items-center justify-center">
          <div className="cursor-pointer flex items-center justify-center bg-[#4368E0] w-24 h-12 text-white">
            {item.value}
          </div>
        </div>
      )
    }

    return (
      <div className="w-full cursor-pointer flex justify-center items-center mb-3" key={item.id}>
        <img src={item.value} alt="img" />
      </div>
    )
  })

  return (
    <div className="max-w-screen max-h-full overflow-auto px-5 col-start-4 col-end-7 row-span-6">
      {sandboxField}
    </div>
  )
}
