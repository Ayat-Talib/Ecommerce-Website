type Props ={
title: string;
}
const Title = ({title}: Props) => {
  return (
    <p className=" text-black text-center pt-10 font-bold text-3xl pb-2">{title}</p>
  )
}

export default Title
