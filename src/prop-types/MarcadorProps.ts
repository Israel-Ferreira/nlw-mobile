import { LatLng, Point } from "react-native-maps";

export default interface MarcadorProps {
    coordinates: LatLng
    children? : React.ReactNode 
    anchor: Point
}