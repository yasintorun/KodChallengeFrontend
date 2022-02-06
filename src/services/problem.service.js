import api from "./api"

const api_url = "/Problem"
export default class ProblemService {
    
    getByTrackId(trackId) {
        return api().get(api_url+"/getallbytrackid?trackId="+trackId)
    }

}