import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const {judul_buku,gambar} = useLoaderData();
    // console.log(id_buku)

    return(
        <div className="mt-28 px-4 lg:px-24">
            <img src={gambar} alt="" className="h-96"/>
            <h2>{judul_buku}</h2>
        </div>
    )
}

export default SingleBook;