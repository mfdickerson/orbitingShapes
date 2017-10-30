/*
 * Mark Dickerson
 * 
 */


var gl;


var pyramidShape = new Float32Array([
         0.0, 1.0, 0.0,   1.0, 0.7, 0.7,   // front face                         
        -1.0, 0.0, 1.0,   1.0, 0.2, 0.2,                            
         1.0, 0.0, 1.0,   1.0, 0.2, 0.2,
         
         0.0, 1.0, 0.0,   0.7, 1.0, 0.7,   // right face                         
         1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
         1.0, 0.0, -1.0,  0.2, 1.0, 0.2,
         
         0.0, 1.0, 0.0,   1.0, 0.7, 0.7,   // back face                         
         1.0, 0.0, -1.0,  1.0, 0.2, 0.2,                            
        -1.0, 0.0, -1.0,  1.0, 0.2, 0.2,
        
         0.0, 1.0, 0.0,   0.7, 1.0, 0.7,   // left face                         
        -1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
        -1.0, 0.0, -1.0,  0.2, 1.0, 0.2                                 
    ]);

var diamondShape = new Float32Array([
         0.0, 1.0, 0.0,   1.0, 0.7, 0.7,   // front face                         
        -1.0, 0.0, 1.0,   1.0, 0.2, 0.2,                            
         1.0, 0.0, 1.0,   1.0, 0.2, 0.2,
         
         0.0, 1.0, 0.0,   0.7, 1.0, 0.7,   // right face                         
         1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
         1.0, 0.0, -1.0,  0.2, 1.0, 0.2,
         
         0.0, 1.0, 0.0,   1.0, 0.7, 0.7,   // back face                         
         1.0, 0.0, -1.0,  1.0, 0.2, 0.2,                            
        -1.0, 0.0, -1.0,  1.0, 0.2, 0.2,
        
         0.0, 1.0, 0.0,   0.7, 1.0, 0.7,   // left face                         
        -1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
        -1.0, 0.0, -1.0,  0.2, 1.0, 0.2,

        0.0, -1.0, 0.0,   1.0, 0.7, 0.7,   // Bottom front face                         
        -1.0, 0.0, 1.0,   1.0, 0.2, 0.2,                            
         1.0, 0.0, 1.0,   1.0, 0.2, 0.2,
         
         0.0, -1.0, 0.0,   0.7, 1.0, 0.7,   // Bottom right face                         
         1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
         1.0, 0.0, -1.0,  0.2, 1.0, 0.2,
         
         0.0, -1.0, 0.0,   1.0, 0.7, 0.7,   // Bottom back face                         
         1.0, 0.0, -1.0,  1.0, 0.2, 0.2,                            
        -1.0, 0.0, -1.0,  1.0, 0.2, 0.2,
        
         0.0, -1.0, 0.0,   0.7, 1.0, 0.7,   // Bottom left face                         
        -1.0, 0.0, 1.0,   0.2, 1.0, 0.2,                            
        -1.0, 0.0, -1.0,  0.2, 1.0, 0.2                                   
    ]);



    //(Â±1, 0, âˆ’1/âˆš2)
    //(0, Â±1, 1/âˆš2) 
var tetrahedronShape = new Float32Array([
    1, 0, -1/Math.sqrt(2), 1.0, 1.0, 1.0, 
    -1, 0, -1/Math.sqrt(2), 1.0, 1.0, 1.0, 
    0, 1, 1/Math.sqrt(2), 1.0, 1.0, 1.0,
    //0, -1, 1/Math.sqrt(2), 1.0, 1.0, 1.0, 

    1, 0, -1/Math.sqrt(2), 1.0, 0.0, 0.0, 
    -1, 0, -1/Math.sqrt(2), 1.0, 0.0, 0.0, 
    //0, 1, 1/Math.sqrt(2), 1.0, 1.0, 1.0,
    0, -1, 1/Math.sqrt(2), 1.0, 0.0, 0.0, 

    1, 0, -1/Math.sqrt(2), 0.0, 1.0, 0.0, 
    //-1, 0, -1/Math.sqrt(2), 1.0, 1.0, 1.0, 
    0, 1, 1/Math.sqrt(2), 0.0, 1.0, 0.0,
    0, -1, 1/Math.sqrt(2), 0.0, 1.0, 0.0, 

    //1, 0, -1/Math.sqrt(2), 1.0, 1.0, 1.0, 
    -1, 0, -1/Math.sqrt(2), 0.0, 0.0, 1.0, 
    0, 1, 1/Math.sqrt(2), 0.0, 0.0, 1.0,
    0, -1, 1/Math.sqrt(2), 0.0, 0.0, 1.0, 
    ]);

var cubeShape = new Float32Array([
    -1.0, -1.0, -1.0, 1.0, 0.0, 0.0,
    -1.0, 1.0, -1.0, 1.0, 0.0, 0.0,
    -1.0, -1.0, 1.0, 1.0, 0.0, 0.0,
    -1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
    -1.0, 1.0, -1.0, 1.0, 0.0, 0.0,
    -1.0, -1.0, 1.0, 1.0, 0.0, 0.0,

    1.0, -1.0, -1.0, 0.0, 1.0, 1.0,
    1.0, 1.0, -1.0, 0.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 0.0, 1.0, 1.0,
    1.0, 1.0, 1.0, 0.0, 1.0, 1.0,
    1.0, 1.0, -1.0, 0.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 0.0, 1.0, 1.0,

    -1.0, -1.0, -1.0, 0.0, 1.0, 0.0,
    1.0, -1.0, -1.0, 0.0, 1.0, 0.0,
    -1.0, -1.0, 1.0, 0.0, 1.0, 0.0,
    1.0, -1.0, 1.0, 0.0, 1.0, 0.0,
    1.0, -1.0, -1.0, 0.0, 1.0, 0.0,
    -1.0, -1.0, 1.0, 0.0, 1.0, 0.0,

    -1.0, 1.0, -1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, -1.0, 1.0, 0.0, 1.0,
    -1.0, 1.0, 1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, 1.0, 1.0, 0.0, 1.0,
    1.0, 1.0, -1.0, 1.0, 0.0, 1.0,
    -1.0, 1.0, 1.0, 1.0, 0.0, 1.0,

    -1.0, -1.0, -1.0, 0.0, 0.0, 1.0,
    -1.0, 1.0, -1.0, 0.0, 0.0, 1.0,
    1.0, -1.0, -1.0, 0.0, 0.0, 1.0,
    1.0, 1.0, -1.0, 0.0, 0.0, 1.0,
    -1.0, 1.0, -1.0, 0.0, 0.0, 1.0,
    1.0, -1.0, -1.0, 0.0, 0.0, 1.0,

    -1.0, -1.0, 1.0, 1.0, 1.0, 0.0,
    -1.0, 1.0, 1.0, 1.0, 1.0, 0.0,
    1.0, -1.0, 1.0, 1.0, 1.0, 0.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 0.0,
    -1.0, 1.0, 1.0, 1.0, 1.0, 0.0,
    1.0, -1.0, 1.0, 1.0, 1.0, 0.0,

]);

/*
var cubeShape = new Float32Array([
    -0.5, -0.5, -0.5, 1.0, 1.0, 1.0, //Point 1
    -0.5, 0.5, -0.5,  0.0, 1.0, 0.0, //Point 2
    0.5, -0.5, -0.5,  0.0, 0.0, 1.0, //Point 3
    0.5, 0.5, -0.5,   0.0, 1.0, 1.0, //Point 4
    0.5, 0.5, 0.5,    0.0, 0.0, 0.0, //Point 5
    -0.5, 0.5, -0.5,  0.0, 1.0, 0.0, //Point 2
    -0.5, 0.5, 0.5,   1.0, 1.0, 0.0, //Point 6
    -0.5, -0.5, -0.5, 1.0, 1.0, 1.0, //Point 1
    -0.5, -0.5, 0.5,  1.0, 0.0, 0.0, //Point 7
    0.5, -0.5, -0.5,  0.0, 0.0, 1.0, //Point 3
    0.5, -0.5, 0.5,   1.0, 0.0, 1.0, //Point 8
    0.5, 0.5, 0.5,    0.0, 0.0, 0.0, //Point 5
    -0.5, -0.5, 0.5,  1.0, 0.0, 0.0, //Point 7
    -0.5, 0.5, 0.5,   1.0, 1.0, 0.0, //Point 6
    ]);
*/


window.onload = function(){
    gl = initialize();

    
    // Create Rotatin Shapes
    //Variables: scale, orbitRadius, orbitSpeed, orbitAxis, rotationSpeed, rotationAxis

    
    // SOLAR SYSTEM ONE
    var solarSystem = new Shape(cubeShape, 1.0, 0.0, 20.0, vec3(1,0,0), 40.0, vec3(1,1,1));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, -20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, -30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, -40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, -80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[0].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[1].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[2].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[3].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[4].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[5].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));

    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 20.0, vec3(1,0,0), 80.0, vec3(1,0,0));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 30.0, vec3(0,1,0), 70.0, vec3(0,1,0));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 40.0, vec3(0,0,1), 60.0, vec3(0,0,1));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 50.0, vec3(1,1,0), 50.0, vec3(1,1,0));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 60.0, vec3(1,0,1), 40.0, vec3(1,0,1));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 70.0, vec3(0,1,1), 30.0, vec3(0,1,1));
    solarSystem.dependents[6].add(cubeShape, 0.125, 1.0, 80.0, vec3(1,1,1), 20.0, vec3(1,1,1));
    


    /* 
    // Solar System Two
    solarSystem.dependents[0].add(tetrahedronShape, 0.25, 2.0, 150.0, vec3(0,1,0), 50.0, vec3(0,0,1));
    solarSystem.dependents[0].add(cubeShape, 0.25, 3.0, 100.0, vec3(0,1,0), 50.0, vec3(0,0,1));

    solarSystem.dependents[1].add(tetrahedronShape, 0.25, 2.0, 250.0, vec3(0,1,1), 75.0, vec3(0,1,1));
    solarSystem.dependents[1].add(cubeShape, 0.25, 3.0, 50.0, vec3(1,1,0), 50.0, vec3(0,0,1));
    */

    /*
    // Solar System Three
    //Variables: scale, orbitRadius, orbitSpeed, orbitAxis, rotationSpeed, rotationAxis
    var solarSystem = new Shape(cubeShape, 1.0, 0.0, 20.0, vec3(1,0,0), 150.0, vec3(1,1,1));
    solarSystem.add(tetrahedronShape, 0.5, 3.0, 150.0, vec3(1,0,0), 100.0, vec3(1,0,0));
    */
   

     gl.clear(gl.COLOR_BUFFER_BIT |gl.DEPTH_BUFFER_BIT);

    // set the camera view
    gl.currentTransform = lookAt(vec3(-5, 3, 3), vec3(0,0,0), vec3(0,1,0));
    gl.uniformMatrix4fv(gl.u_ViewMatrix, false, flatten(gl.currentTransform));

    gl.currentTransform = scale(0.75,0.75,0.75);

  
    

    var tick = function(){

        gl.clear(gl.COLOR_BUFFER_BIT);
        solarSystem.update();


        requestAnimationFrame(tick);
    }

    tick();  
}


/*
 * Much of the initialize function will appear familiar. It does all of the
 * important boilerplate initialization tasks. There are a couple of new
 * things in here, however.
 *
 * You will notice that I set the projection in here. I also created a
 * separate transformation matrix for the camera position.
 *
 * More subtly, you will notice that I have added a number of things to the
 * gl object, to reduce the number of things that I have to pass around. I
 * took all of those things that could be considered part of our GL state,
 * and just added them to the object.
 *
 * This function also creates the matrix stack and adds it to gl for easy
 * access.
 */
function initialize() {
    var canvas = document.getElementById('gl-canvas');
    
    // Use webgl-util.js to make sure we get a WebGL context
    var gl = WebGLUtils.setupWebGL(canvas);
    
    if (!gl) {
        alert("Could not create WebGL context");
        return;
    }
    
    
    // set the viewport to be sized correctly
    gl.viewport(0,0, canvas.width, canvas.height);
    // set the clear color
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // enable depth tests
    gl.enable(gl.DEPTH_TEST);
    
    
    // create program with our shaders and enable it
    // notice that I'm adding the program as a property to the gl object
    gl.program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(gl.program);

    // grab the handle to the model matrix and add it to gl
    gl.u_ModelMatrix =  gl.getUniformLocation(gl.program, 'u_ModelMatrix');
    
    // grab the handle to the view matrix and add it to gl
    gl.u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
    
    
    // Create the projection matrix and load it
    var projection = perspective(70, 1, 0.1, 90);

    gl.u_Projection = gl.getUniformLocation(gl.program, 'u_Projection');
    gl.uniformMatrix4fv(gl.u_Projection, false, flatten(projection));
    
    
    
    // create the current transform and the matrix stack right in th gl object
    gl.currentTransform = mat4;
    //console.log(gl.currentTransform);
    gl.transformStack = [];
    
    // add some method for working with the matrix stack
    gl.push = function(){
        gl.transformStack.push(gl.currentTransform);
    }
    
    gl.pop = function(){
        gl.currentTransform = gl.transformStack.pop();
    }
    
    
    return gl;
}

/*
 * This is a constructor that we can use to build Pyramid objects.
 */
function Shape(shape, sizeScale, orbitRadius, orbitSpeed, orbitAxis, rotationSpeed, rotationAxis){
    const FSIZE = 4; // the size of the values we are sending to the VBO
    
    this.dependents = [];

    this.sizeScale = sizeScale;

    this.orbitRadius = orbitRadius;
    this.orbitSpeed = orbitSpeed;
    this.orbitAxis = orbitAxis;

    this.rotationSpeed = rotationSpeed;
    this.rotationAxis = rotationAxis


    var currentOrbitAngle = 0.0;
    var currentRotationAngle = 0.0;

    this.last = Date.now();


    /* Initialize the shape */
    
    // vertices and their colors (arranged x1,y1,z1, r1,g1,b1, x2, y2, z2, r2,g2.b2, etc...)
    this.vertices = shape;
    this.numVertices = this.vertices.length / 6.0;

   // Load the vertices into the VBO
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
    
    /*
     * This method is called when we want to add moons
     */



    this.add = function(shape, sizeScale, orbitRadius, orbitSpeed, orbitAxis, rotationSpeed, rotationAxis){
        this.dependents.push(new Shape(shape, sizeScale, orbitRadius, orbitSpeed, orbitAxis, rotationSpeed, rotationAxis));
    }
    
    this.update = function() { 
        this.now = Date.now();
        this.elapsed = this.now - this.last;
        this.last = this.now;

        var newOrbitAngle = currentOrbitAngle + (this.orbitSpeed * this.elapsed)/ 1000.0;
        currentOrbitAngle = newOrbitAngle % 360;

        gl.push();


        if (this.orbitRadius != 0.0) {
            var x = 1/(Math.sqrt(orbitAxis[0] + orbitAxis[1] + orbitAxis[2]));

            gl.currentTransform = mult(gl.currentTransform, rotate(currentOrbitAngle, this.orbitAxis));
            gl.currentTransform = mult(gl.currentTransform, translate(-this.orbitRadius*x*orbitAxis[1], -this.orbitRadius*x*orbitAxis[2], this.orbitRadius*x*orbitAxis[0]));
        }

        for (var i = 0; i < this.dependents.length; ++i ) {
            this.dependents[i].update();
        };

        gl.currentTransform = mult(gl.currentTransform, scale(this.sizeScale, this.sizeScale, this.sizeScale));


        var newRotationAngle = currentRotationAngle + (this.rotationSpeed * this.elapsed)/ 1000.0;
        currentRotationAngle = newRotationAngle % 360;


        gl.currentTransform = mult(gl.currentTransform, rotate(currentRotationAngle, this.rotationAxis));



        gl.uniformMatrix4fv(gl.u_ModelMatrix, false, flatten(gl.currentTransform));
        this.draw();


    }

    /*
     * This method is called when we want to draw the shape.
     */
    this.draw = function() {
        // need to rebind the array buffer to the appropriate VBO in cse some other buffer has been made active
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        
        // Set the association for the position attribute
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        if (a_Position < 0) {
            console.log('Failed to get storage location');
            return -1;
        }
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE*6,0);
        gl.enableVertexAttribArray(a_Position);

        // Set the association for the color attribute
        var a_Color= gl.getAttribLocation(gl.program, 'a_Color');
        if (a_Color < 0) {
            console.log('Failed to get storage location');
            return -1;
        }
        gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false,  FSIZE*6, FSIZE*3);
        gl.enableVertexAttribArray(a_Color);
        
         
        // draw the shape 
        gl.drawArrays(gl.TRIANGLES, 0, this.numVertices);
        gl.pop();
        
    }  
    
}
