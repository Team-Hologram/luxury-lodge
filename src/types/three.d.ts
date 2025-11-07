import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    pointsMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
  }
}