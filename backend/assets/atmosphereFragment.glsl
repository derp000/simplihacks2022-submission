// 51:51
varying vec3 vertexNormal;

// change vec3 of atmosphere to change color (R, G, B)
void main() {
    float intensity = pow(0.5 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 atmosphere = vec3(0.1, 0.98, 0.75) * pow(intensity, 1.5);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
}
