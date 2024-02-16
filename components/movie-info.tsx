import { API_URL } from "../app/(home)/page";

/**
 * id로 영화 데이터 가져오기
 * @param id movie id
 * @returns movie json
 */
async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}
