import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTrack } from "../store/actions/trackActions"

const TrackListPage = () => {
    const track = useSelector(state => state.track)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTrack())
    }, [])
    return (
        <div>
            {track.tracks.length<1 && track.loading
            ? (
               <div>
                   Yükleniyor
                </div> 
            )
            : (
                <div>
                    <div className="bg-white p-5">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <h1>Problemle İlgili başlık</h1>
                                <p>Problemlerle veya programlama ile ilgili uzun bir bilgilendirici yazı</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="pt-5 pb-5 mt-5 mb-5">
                            <div className="joined track-list mb-5">
                                {[1].map(item => (
                                    <div className="col-md-6 shadow track" >
                                        <div className="row">
                                            <div className="col-2">
                                                <div>
                                                    <img src={item.Icon} className="img img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h3>Algoritma</h3>
                                                    <div className="badge bg-warning text-dark">
                                                        Katıldın
                                                    </div>
                                                </div>
                                                <p><strong>12/58</strong> Problemler</p>
                                                <p>En son 3 gün önce giriş yaptın</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="unjoined track-list">

                                {track.tracks.map((item, index) => (
                                    <div className="col-md-6 shadow track" >
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="track-logo">
                                                    <img src={item.icon} className="img img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <h3>{item.name}</h3>
                                                <p>Toplam <strong>58</strong> problem bulunuyor.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default React.memo(TrackListPage)