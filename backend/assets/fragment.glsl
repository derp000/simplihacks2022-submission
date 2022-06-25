uniform sampler2D globeTexture;

// vec2 45:39
varying vec2 vertexUV;

// 51:51
varying vec3 vertexNormal;

// change vec3 of atmosphere to change color (R, G, B)
void main() {
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.55, 0.06, 0.93) * pow(intensity, 1.5);
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}
