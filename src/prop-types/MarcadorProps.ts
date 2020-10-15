import { LatLng } from "react-native-maps";

export default interface MarcadorProps {
    coordinates: LatLng
    calloutText: string
}