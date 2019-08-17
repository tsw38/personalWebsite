import randomColor from 'randomcolor';

const Particles = {
    CANVAS_HEIGHT: function() {
        return window.innerHeight;
    },
    CANVAS_WIDTH: function() {
        return window.innerWidth;
    },
    FPM: function() {
        return 625;
    },
    ParticlesArray: [],
    sceneAge: 0,
    colorFamilyIndex: Math.floor(Math.random() * (6 - 0 + 1)) + 0,
    _canvas: function() {
        return document.getElementById('canvas');
    },
    ctx: function() {
        return Particles._canvas().getContext('2d');
    },
    getRandom: function(min, max, isFloat) {
        if(isFloat){
            return (Math.random() * (max - min) + min);
        }
        return Math.round(Math.random() * (max - min)) + min;
    },
    getRandomSize: function() {
        if(Particles.isMobile()){
            return Particles.getRandom(1, 1, true);
        } else {
            // console.log(Particles.getRandom(0,1,true));
            if(Particles.CANVAS_WIDTH() <= 680){
            return Particles.getRandom(0.1, 1, true);
            } else {
            return (Particles.getRandom(0,1,true) >= 0.95) ? 3 : Particles.getRandom(0.5, 2, true);
            }

        }
    },
    getRandomOpacity: function() {
        var opacity;
        opacity = (Particles.isMobile()) ? Particles.getRandom(0,0.1,true) : Particles.getRandom(0,1,true);
        opacity = parseFloat(opacity.toFixed(2));
        return opacity;
    },
    getRandomColor: function(colorFamilyIndex) {
        var colorFamily = ['red','green','orange','blue','monochrome','purple',''];
        var _randomColor = randomColor({
            luminosity: 'bright',
            format: 'rgba',
            hue:colorFamily[Particles.colorFamilyIndex]
        });

        _randomColor = _randomColor.split(",");
        _randomColor.map(function(elem,index){ _randomColor[index] = _randomColor[index].trim(); return true;});
        _randomColor[3] = "0)";
        _randomColor = _randomColor.join(",");
        return _randomColor;
    },
    updateOpacity: function(color, amount) {
        color = color.split(",");
        var opacity = parseFloat(color[3].split(")")[0]);
        opacity += amount;
        color[3] = opacity + ")";
        color = color.join(",");
        return color;
    },
    getRandomLife: function() {
        var duration,middle,birth;

        duration = (Particles.isMobile()) ? Particles.getRandom(1000, 2000, false) : Particles.getRandom(0, 750, false); //random "time"

        if(Particles.isMobile()){
            duration += 60;
            middle = Particles.getRandom(500, 900, false);
            birth = Particles.getRandom(500, middle, false)+200;
        } else {
            middle = Particles.getRandom(50, 80,false);
            birth = Particles.getRandom(0, (middle / 2.7), false);
        }

        middle /= 100;
        birth /= 100;

        // if(birth < 1000){
        //   console.log("this is less than a thousand");
        // }

        return {
            age: 0,
            birth: duration * birth,
            middle: duration * middle,
            death: duration * birth,
            duration: (duration + birth)
        };
    },
    createParticle: function(x, y, color, size) {
        Particles.ctx().fillStyle = color;
        Particles.ctx().beginPath();
        Particles.ctx().arc(x, y, size, 0, Math.PI * 2, true);
        Particles.ctx().closePath();
        Particles.ctx().fill();
    },
    getEndLocation: function(init_x, init_y) {
        var radius, angle, end_x, end_y, dx, dy;

        // for 15% of the particles, make them have a larger radius option
        radius = (Particles.getRandom(0,1,true) > 0.85) ? Particles.getRandom(700,1000,false) : Particles.getRandom(300,500,false);

        angle = (Particles.getRandom(0,1,true) > 0.50) ? Particles.getRandom(0, 360, false) : (-1 * Particles.getRandom(0, 360,false)); //choose a random angle
        end_x = Math.ceil(init_x + radius * Math.cos(angle * Math.PI / 180));
        end_y = Math.ceil(init_y + radius * Math.sin(angle * Math.PI / 180));

        /* To make all of the particles move at their own speed */
        end_x = (init_x > end_x) ? Particles.getRandom(end_x, init_x, true) : Particles.getRandom(init_x, end_x, true);
        end_y = (init_y > end_y) ? Particles.getRandom(end_y, init_y, true) : Particles.getRandom(init_y, end_y, true);

        dx = (init_x - end_x) / Particles.FPM();
        dy = (init_y - end_y) / Particles.FPM();

        return [dx, dy];
    },
    createScene: function(count) {
        for (var i = 0; i < count; i++) {
            var init_x = Particles.getRandom(Particles.CANVAS_WIDTH(),0,false);
            var init_y = Particles.getRandom(Particles.CANVAS_HEIGHT(),0,false);
            var ends = Particles.getEndLocation(init_x, init_y);
            Particles.ParticlesArray[i] = {
            color: Particles.getRandomColor(),
            max_opacity: parseFloat(Particles.getRandomOpacity().toFixed(2)),
            x: init_x,
            y: init_y,
            dx: ends[0],
            dy: ends[1],
            life: Particles.getRandomLife(),
            size: Particles.getRandomSize()
            };
        }
    },
    animateParticles: function() {
        Particles.ctx().clearRect(0, 0, Particles.CANVAS_WIDTH(), Particles.CANVAS_HEIGHT());
        Particles.sceneAge++;

        if(Particles.sceneAge >= 220){
            function newRandom(oldIndex,newIndex){
            if(oldIndex === newIndex){
                return newRandom(oldIndex,Particles.getRandom(0,6,false));
            } else {
                return newIndex;
            }
            }
            Particles.colorFamilyIndex = newRandom(Particles.colorFamilyIndex,Particles.getRandom(0,6,false));
            Particles.sceneAge = 0;
        }


        Particles.ParticlesArray.forEach(function(particle, index) {
            if (particle.life.age >= particle.life.duration * 2.5) {
            var new_x = Particles.getRandom(Particles.CANVAS_WIDTH(), 0,false);
            var new_y = Particles.getRandom(Particles.CANVAS_HEIGHT(), 0,false);
            var ends  = Particles.getEndLocation(new_x, new_y);

            Particles.ParticlesArray[index] = {
                color: Particles.getRandomColor(Particles.colorFamilyIndex),
                max_opacity: parseFloat(Particles.getRandomOpacity().toFixed(2)),
                x: new_x,
                y: new_y,
                dx: ends[0],
                dy: ends[1],
                life: Particles.getRandomLife(),
                size: Particles.getRandomSize()
            };
            } else {
            // else move the particle
            // update it's opacity depending on it's stage in life
            particle.x += particle.dx;
            particle.y += particle.dy;
            if (particle.life.age <= particle.life.birth) {
                if(Particles.isMobile()){
                particle.color = Particles.updateOpacity(particle.color, 0.003);
                } else {
                particle.color = Particles.updateOpacity(particle.color, 0.06);
                }
            } else if (particle.life.age >= (particle.life.birth)) {
                particle.color = Particles.updateOpacity(particle.color, -0.005);
            }
            particle.life.age += 10;
            }
            Particles.createParticle(
            particle.x + particle.dx,
            particle.y + particle.dy,
            particle.color,
            particle.size
            );
        });
    },
    isMobile: function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    },
    addEvent: function(object, type, callback) {
        if (object == null || typeof(object) === 'undefined') return;
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
        } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
        } else {
            object["on"+type] = callback;
        }
    },
    onWindowResize: function(){
        Particles._canvas().height = Particles.CANVAS_HEIGHT();
        Particles._canvas().width = Particles.CANVAS_WIDTH();
    },
    init: function() {
        Particles.createScene(Particles.isMobile() ? 1500 : 7000);

        Particles._canvas().height = Particles.CANVAS_HEIGHT();
        Particles._canvas().width = Particles.CANVAS_WIDTH();

        Particles.isMobile() ?
            setInterval(Particles.animateParticles, 60) :
            setInterval(Particles.animateParticles, 1);

        //When the window resizes update the canvas width and height
        Particles.addEvent(window, "resize", Particles.onWindowResize);
    }
};

module.exports = Particles;
