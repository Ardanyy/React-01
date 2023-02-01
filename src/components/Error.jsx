const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-center text-white p-3 uppercase font-bold rounded mb-2">
    <p>{mensaje}</p>
    </div>
  )
}

export default Error