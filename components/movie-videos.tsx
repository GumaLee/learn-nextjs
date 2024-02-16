import { API_URL } from "../app/(home)/page";

/**
 * id로 트레일러 영상 가져오기
 * @param id movie id
 * @returns videos json
 */
async function getVideos(id: string) {
    // throw new Error('[ERROR] something broke...')
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

// video에 관한 UI만을 가지는 컴포넌트
export default async function MovieVideos({id}: {id:string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}