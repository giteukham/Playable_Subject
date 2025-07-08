/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DragAndDropManager start.*/
    Bridge.define("DragAndDropManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            currentDraggedStuff: null,
            originalStuffPosition: null,
            originalStuffParentSlot: null,
            currentDragDepth: 0,
            dragOffsetFromCenter: null,
            dragZOffset: 0,
            slotLayer: null
        },
        ctors: {
            init: function () {
                this.originalStuffPosition = new UnityEngine.Vector3();
                this.dragOffsetFromCenter = new UnityEngine.Vector3();
                this.slotLayer = new UnityEngine.LayerMask();
                this.dragZOffset = -1.0;
            }
        },
        methods: {
            /*DragAndDropManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(DragAndDropManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(DragAndDropManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    DragAndDropManager.Instance = this;
                }
            },
            /*DragAndDropManager.Awake end.*/

            /*DragAndDropManager.StartDrag start.*/
            StartDrag: function (stuff) {
                if (!(UnityEngine.MonoBehaviour.op_Inequality(this.currentDraggedStuff, null))) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                        GameManager.Instance.OnPlayerInteraction();
                    }
                    this.currentDraggedStuff = stuff;
                    this.originalStuffPosition = stuff.transform.position.$clone();
                    this.originalStuffParentSlot = stuff.GetComponentInParent(Slot);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.originalStuffParentSlot, null) && UnityEngine.MonoBehaviour.op_Equality(this.originalStuffParentSlot.placedStuff, stuff)) {
                        this.originalStuffParentSlot.placedStuff = null;
                        this.originalStuffParentSlot.isCorrectlyFilled = false;
                    }
                    this.currentDragDepth = UnityEngine.Camera.main.WorldToScreenPoint(this.currentDraggedStuff.transform.position).z;
                    var mouseWorldPosition = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( UnityEngine.Input.mousePosition.x, UnityEngine.Input.mousePosition.y, this.currentDragDepth ));
                    this.dragOffsetFromCenter = this.currentDraggedStuff.transform.position.$clone().sub( mouseWorldPosition );
                    var currentWorldPos = this.currentDraggedStuff.transform.position.$clone();
                    this.currentDraggedStuff.transform.position = new pc.Vec3( currentWorldPos.x, currentWorldPos.y, currentWorldPos.z + this.dragZOffset );
                    this.currentDraggedStuff.transform.SetParent(null);
                }
            },
            /*DragAndDropManager.StartDrag end.*/

            /*DragAndDropManager.Drag start.*/
            Drag: function (stuff) {
                if (!(UnityEngine.MonoBehaviour.op_Inequality(this.currentDraggedStuff, stuff))) {
                    var mousePosition = UnityEngine.Input.mousePosition.$clone();
                    mousePosition.z = UnityEngine.Camera.main.WorldToScreenPoint(this.currentDraggedStuff.transform.position).z;
                    var newWorldPosition = UnityEngine.Camera.main.ScreenToWorldPoint(mousePosition);
                    this.currentDraggedStuff.transform.position = newWorldPosition.$clone().add( this.dragOffsetFromCenter );
                }
            },
            /*DragAndDropManager.Drag end.*/

            /*DragAndDropManager.EndDrag start.*/
            EndDrag: function (stuff) {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentDraggedStuff, stuff)) {
                    return;
                }
                var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var targetSlot = null;
                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$1(ray, hit, Number.POSITIVE_INFINITY, UnityEngine.LayerMask.op_Implicit(this.slotLayer.$clone()))) {
                    targetSlot = hit.v.collider.GetComponent(Slot);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(targetSlot, null) && UnityEngine.MonoBehaviour.op_Equality(targetSlot.placedStuff, null)) {
                    targetSlot.PlaceStuff(this.currentDraggedStuff);
                    if (UnityEngine.MonoBehaviour.op_Inequality(GridManager.Instance, null)) {
                        GridManager.Instance.CheckRowClearance(targetSlot.rowIndex);
                    }
                } else {
                    this.currentDraggedStuff.transform.position = this.originalStuffPosition.$clone();
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.originalStuffParentSlot, null)) {
                        this.originalStuffParentSlot.PlaceStuff(this.currentDraggedStuff);
                    }
                }
                this.currentDraggedStuff = null;
            },
            /*DragAndDropManager.EndDrag end.*/


        }
    });
    /*DragAndDropManager end.*/

    /*EffectsManager start.*/
    Bridge.define("EffectsManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            rowClearParticlePrefab: null,
            goodTextPrefab: null,
            poolSize: 0,
            rowClearParticlePool: null,
            goodTextPool: null
        },
        ctors: {
            init: function () {
                this.poolSize = 5;
            }
        },
        methods: {
            /*EffectsManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(EffectsManager.Instance, null)) {
                    EffectsManager.Instance = this;
                } else {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
                this.InitializePools();
            },
            /*EffectsManager.Awake end.*/

            /*EffectsManager.InitializePools start.*/
            InitializePools: function () {
                this.rowClearParticlePool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                this.goodTextPool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                for (var i = 0; i < this.poolSize; i = (i + 1) | 0) {
                    var p1 = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.rowClearParticlePrefab, this.transform);
                    p1.SetActive(false);
                    this.rowClearParticlePool.Enqueue(p1);
                    var p2 = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.goodTextPrefab, this.transform);
                    if (UnityEngine.Component.op_Equality(p2.GetComponent(UnityEngine.SpriteRenderer), null)) {
                        UnityEngine.Debug.LogError$2("goodTextPrefab\uc5d0 SpriteRenderer \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4");
                    }
                    p2.SetActive(false);
                    this.goodTextPool.Enqueue(p2);
                }
            },
            /*EffectsManager.InitializePools end.*/

            /*EffectsManager.PlayRowClearEffect start.*/
            PlayRowClearEffect: function (position) {
                var vector = position.$clone();
                UnityEngine.Debug.Log$1("PlayRowClearEffect called at position: " + (Bridge.toString(vector) || ""));
                var particle = this.GetFromPool(this.rowClearParticlePool, this.rowClearParticlePrefab);
                if (!(UnityEngine.GameObject.op_Equality(particle, null))) {
                    particle.transform.position = new pc.Vec3( position.x, position.y, 5.0 );
                    particle.SetActive(true);
                    this.StartCoroutine$1(this.ReturnToPoolAfterDuration(particle, this.rowClearParticlePool, 1.0));
                }
            },
            /*EffectsManager.PlayRowClearEffect end.*/

            /*EffectsManager.PlayGoodTextEffect start.*/
            PlayGoodTextEffect: function (position) {
                var goodTextObject = this.GetFromPool(this.goodTextPool, this.goodTextPrefab);
                if (UnityEngine.GameObject.op_Equality(goodTextObject, null)) {
                    return;
                }
                var spriteRenderer = goodTextObject.GetComponent(UnityEngine.SpriteRenderer);
                if (!(UnityEngine.Component.op_Equality(spriteRenderer, null))) {
                    goodTextObject.transform.position = new pc.Vec3( position.x, position.y, 5.0 );
                    goodTextObject.SetActive(true);
                    var startColor = spriteRenderer.color.$clone();
                    startColor.a = 0.0;
                    spriteRenderer.color = startColor.$clone();
                    var sequence = DG.Tweening.DOTween.Sequence();
                    DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleSprite.DOFade(spriteRenderer, 1.0, 0.3));
                    DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, 0.5);
                    DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleSprite.DOFade(spriteRenderer, 0.0, 0.3));
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.bind(this, function () {
                        goodTextObject.SetActive(false);
                        this.goodTextPool.Enqueue(goodTextObject);
                    }));
                }
            },
            /*EffectsManager.PlayGoodTextEffect end.*/

            /*EffectsManager.GetFromPool start.*/
            GetFromPool: function (pool, prefab) {
                if (pool.Count > 0) {
                    return pool.Dequeue();
                }
                return UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, this.transform);
            },
            /*EffectsManager.GetFromPool end.*/

            /*EffectsManager.ReturnToPoolAfterDuration start.*/
            ReturnToPoolAfterDuration: function (obj, pool, delay) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    obj.SetActive(false);
                                        pool.Enqueue(obj);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EffectsManager.ReturnToPoolAfterDuration end.*/


        }
    });
    /*EffectsManager end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            idleTimeThreshold: 0,
            idleTimer: 0
        },
        ctors: {
            init: function () {
                this.idleTimeThreshold = 3.0;
                this.idleTimer = 0.0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                } else {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Update start.*/
            Update: function () {
                this.idleTimer += UnityEngine.Time.deltaTime;
                if (this.idleTimer >= this.idleTimeThreshold && UnityEngine.MonoBehaviour.op_Inequality(UIManager.Instance, null)) {
                    UIManager.Instance.SetIdlePromptActive(true);
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.OnPlayerInteraction start.*/
            OnPlayerInteraction: function () {
                this.idleTimer = 0.0;
                if (UnityEngine.MonoBehaviour.op_Inequality(UIManager.Instance, null)) {
                    UIManager.Instance.SetIdlePromptActive(false);
                }
            },
            /*GameManager.OnPlayerInteraction end.*/


        }
    });
    /*GameManager end.*/

    /*GridManager start.*/
    Bridge.define("GridManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                TotalRows: 0,
                Instance: null
            },
            ctors: {
                init: function () {
                    this.TotalRows = 9;
                }
            }
        },
        fields: {
            verticalOffset: 0,
            seed: 0,
            totalGridHeight: 0,
            prefabsParent: null,
            rowParentPrefab: null,
            slotPrefab: null,
            stuffPrefab: null,
            slotScale: 0,
            stuffScale: 0,
            slotWidth: 0,
            slotHeight: 0,
            levelData: null,
            rowParents: null,
            gridSlotsByRow: null,
            rowMoveDownDuration: 0,
            isRowCleared: null
        },
        ctors: {
            init: function () {
                this.verticalOffset = 0.0;
                this.seed = 3;
                this.slotScale = 0.25;
                this.stuffScale = 1.0;
                this.slotWidth = 0.6;
                this.slotHeight = 1.0;
                this.levelData = System.Array.init(9, null, RowData);
                this.rowMoveDownDuration = 0.3;
            }
        },
        methods: {
            /*GridManager.OnValidate start.*/
            OnValidate: function () {
                if (this.levelData.length !== 9) {
                    System.Array.resize(Bridge.ref(this, "levelData"), 9, null, RowData);
                }
            },
            /*GridManager.OnValidate end.*/

            /*GridManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(GridManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GridManager.Instance, this)) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                } else {
                    GridManager.Instance = this;
                }
            },
            /*GridManager.Awake end.*/

            /*GridManager.Start start.*/
            Start: function () {
                this.CreateGrid();
            },
            /*GridManager.Start end.*/

            /*GridManager.CreateGrid start.*/
            CreateGrid: function () {
                var $t;
                this.rowParents = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.gridSlotsByRow = new (System.Collections.Generic.List$1(System.Array.type(Slot))).ctor();
                this.isRowCleared = System.Array.init(9, false, System.Boolean);
                for (var j = 0; j < 9; j = (j + 1) | 0) {
                    this.isRowCleared[j] = false;
                }
                var wrongStuffs = new (System.Collections.Generic.List$1(Stuff)).ctor();
                var plcaedWrongStuffs = new (System.Collections.Generic.List$1(Stuff)).ctor();
                for (var row2 = 0; row2 < 9; row2 = (row2 + 1) | 0) {
                    var currentRowData = this.levelData[row2];
                    for (var i = 0; i < currentRowData.wrongStuffCount; i = (i + 1) | 0) {
                        var newStuff = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.stuffPrefab);
                        var stuffComponent = newStuff.GetComponent(Stuff);
                        stuffComponent.Initialize(row2, currentRowData.material);
                        wrongStuffs.add(stuffComponent);
                    }
                }
                this.Shuffle(Stuff, wrongStuffs, new System.Random.$ctor1(this.seed));
                this.totalGridHeight = 8.0 * this.slotHeight;
                var startY = this.totalGridHeight / 2.0 + this.verticalOffset;
                for (var row = 0; row < 9; row = (row + 1) | 0) {
                    var rowParentGO = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.rowParentPrefab, this.prefabsParent);
                    rowParentGO.name = System.String.format("RowParent_{0}", [Bridge.box(row, System.Int32)]);
                    rowParentGO.transform.localPosition = new pc.Vec3( 0.0, startY - row * this.slotHeight, 0.0 );
                    this.rowParents.add(rowParentGO);
                    var currentRowData2 = this.levelData[row];
                    var slotsInRow = (row + 1) | 0;
                    var centeredStartX = 0.0 - row * this.slotWidth / 2.0;
                    var currentRowSlots = System.Array.init(slotsInRow, null, Slot);
                    var wrongSlotIndexes = this.GetWrongIndexes(slotsInRow, currentRowData2.wrongStuffCount);
                    for (var col = 0; col < slotsInRow; col = (col + 1) | 0) {
                        var position = new pc.Vec3( centeredStartX + col * this.slotWidth, 0.0, 0.0 );
                        var newSlot = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.slotPrefab, rowParentGO.transform);
                        var slotComponent = newSlot.GetComponent(Slot);
                        newSlot.transform.localPosition = position.$clone();
                        newSlot.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.slotScale );
                        slotComponent.Initialize(row, currentRowData2.material);
                        currentRowSlots[col] = slotComponent;
                        newSlot.isStatic = true;
                        if (row === 0) {
                            continue;
                        }
                        if (wrongSlotIndexes.contains(col)) {
                            for (var k = 0; k < wrongStuffs.Count; k = (k + 1) | 0) {
                                if (wrongStuffs.getItem(k).rowIndex !== row) {
                                    wrongStuffs.getItem(k).gameObject.transform.SetParent(newSlot.transform);
                                    wrongStuffs.getItem(k).gameObject.transform.localPosition = new pc.Vec3( -1.0, -1.0, -4.5 );
                                    wrongStuffs.getItem(k).gameObject.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.stuffScale );
                                    slotComponent.PlaceStuff(wrongStuffs.getItem(k));
                                    plcaedWrongStuffs.add(wrongStuffs.getItem(k));
                                    wrongStuffs.removeAt(k);
                                    break;
                                }
                                if (wrongStuffs.Count !== 1 || wrongStuffs.getItem(k).rowIndex !== row) {
                                    continue;
                                }
                                $t = Bridge.getEnumerator(plcaedWrongStuffs);
                                try {
                                    while ($t.moveNext()) {
                                        var stuff = $t.Current;
                                        if (stuff.rowIndex !== row) {
                                            var wrongSlot = stuff.transform.parent.gameObject.GetComponent(Slot);
                                            wrongStuffs.getItem(k).gameObject.transform.SetParent(stuff.transform.parent);
                                            wrongStuffs.getItem(k).gameObject.transform.localPosition = new pc.Vec3( -1.0, -1.0, -4.5 );
                                            wrongStuffs.getItem(k).gameObject.transform.localScale = new pc.Vec3( 1, 1, 1 );
                                            wrongSlot.PlaceStuff(wrongStuffs.getItem(k));
                                            stuff.gameObject.transform.SetParent(newSlot.transform);
                                            stuff.gameObject.transform.localPosition = new pc.Vec3( -1.0, -1.0, -4.5 );
                                            stuff.gameObject.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.stuffScale );
                                            slotComponent.PlaceStuff(stuff);
                                            break;
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t, System.IDisposable)) {
                                        $t.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } else {
                            var newStuff2 = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.stuffPrefab, newSlot.transform);
                            var stuffComponent2 = newStuff2.GetComponent(Stuff);
                            newStuff2.transform.localPosition = new pc.Vec3( -1.0, -1.0, -4.5 );
                            stuffComponent2.Initialize(row, currentRowData2.material);
                            slotComponent.PlaceStuff(stuffComponent2);
                        }
                    }
                    this.gridSlotsByRow.add(currentRowSlots);
                }
            },
            /*GridManager.CreateGrid end.*/

            /*GridManager.GetWrongIndexes start.*/
            GetWrongIndexes: function (totalSlots, wrongCount) {
                if (wrongCount <= 0) {
                    return new (System.Collections.Generic.HashSet$1(System.Int32)).ctor();
                }
                var seedRandom = new System.Random.$ctor1(this.seed);
                var wrongIndexesList = (System.Linq.Enumerable.range(0, totalSlots).orderBy(function (x) {
                    return seedRandom.Next();
                })).take(wrongCount);
                return new (System.Collections.Generic.HashSet$1(System.Int32)).$ctor1(wrongIndexesList);
            },
            /*GridManager.GetWrongIndexes end.*/

            /*GridManager.Shuffle start.*/
            Shuffle: function (T, list, rng) {
                var j = list.Count;
                while (j > 1) {
                    j = (j - 1) | 0;
                    var i = rng.Next$1(((j + 1) | 0));
                    var value = Bridge.rValue(list.getItem(i));
                    list.setItem(i, Bridge.rValue(list.getItem(j)));
                    list.setItem(j, Bridge.rValue(value));
                }
            },
            /*GridManager.Shuffle end.*/

            /*GridManager.CheckRowClearance start.*/
            CheckRowClearance: function (rowToCheck) {
                var $t;
                if (rowToCheck === 0 || this.isRowCleared[rowToCheck]) {
                    return;
                }
                var currentRowSlots = this.gridSlotsByRow.getItem(rowToCheck);
                if (currentRowSlots == null || currentRowSlots.length === 0) {
                    return;
                }
                var allSlotsCorrect = true;
                $t = Bridge.getEnumerator(currentRowSlots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(slot, null) || UnityEngine.MonoBehaviour.op_Equality(slot.placedStuff, null) || !slot.isCorrectlyFilled) {
                            allSlotsCorrect = false;
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (allSlotsCorrect) {
                    this.isRowCleared[rowToCheck] = true;
                    this.ClearAndHide(rowToCheck);
                }
            },
            /*GridManager.CheckRowClearance end.*/

            /*GridManager.ClearAndHide start.*/
            ClearAndHide: function (rowToHide) {
                var $t, $t1;
                var rowParentGO = this.rowParents.getItem(rowToHide);
                if (UnityEngine.GameObject.op_Equality(rowParentGO, null)) {
                    return;
                }
                var currentRowSlots = this.gridSlotsByRow.getItem(rowToHide);
                if (UnityEngine.MonoBehaviour.op_Inequality(EffectsManager.Instance, null)) {
                    if (UnityEngine.GameObject.op_Inequality(rowParentGO, null)) {
                        UnityEngine.Debug.Log$1("rowParentGO != null");
                        EffectsManager.Instance.PlayGoodTextEffect(rowParentGO.transform.position.$clone());
                    }
                    if (currentRowSlots != null) {
                        UnityEngine.Debug.Log$1("currentRowSlots != null");
                        var array = currentRowSlots;
                        $t = Bridge.getEnumerator(array);
                        try {
                            while ($t.moveNext()) {
                                var slot2 = $t.Current;
                                if (UnityEngine.MonoBehaviour.op_Inequality(slot2, null)) {
                                    EffectsManager.Instance.PlayRowClearEffect(slot2.transform.position.$clone());
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                }
                if (currentRowSlots != null) {
                    var array2 = currentRowSlots;
                    $t1 = Bridge.getEnumerator(array2);
                    try {
                        while ($t1.moveNext()) {
                            var slot = $t1.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(slot, null)) {
                                slot.ClearStuff();
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                }
                UnityEngine.Object.Destroy(rowParentGO);
                this.rowParents.setItem(rowToHide, null);
                this.gridSlotsByRow.setItem(rowToHide, null);
                this.MoveRemainingRowsDown(rowToHide);
            },
            /*GridManager.ClearAndHide end.*/

            /*GridManager.MoveRemainingRowsDown start.*/
            MoveRemainingRowsDown: function (clearedRowIndex) {
                var sequence = DG.Tweening.DOTween.Sequence();
                for (var row = 0; row < 9; row = (row + 1) | 0) {
                    if (this.isRowClearedByRowIndex(row)) {
                        continue;
                    }
                    var rowParentGO = System.Linq.Enumerable.from(this.rowParents, UnityEngine.GameObject).elementAtOrDefault(row, null);
                    if (!(UnityEngine.GameObject.op_Inequality(rowParentGO, null))) {
                        continue;
                    }
                    var clearedRowsBelowCurrent = 0;
                    for (var i = (row + 1) | 0; i < 9; i = (i + 1) | 0) {
                        if (this.isRowClearedByRowIndex(i)) {
                            clearedRowsBelowCurrent = (clearedRowsBelowCurrent + 1) | 0;
                        }
                    }
                    var startY = this.totalGridHeight / 2.0 + this.verticalOffset;
                    var originalYForThisRow = startY - row * this.slotHeight;
                    var finalTargetY = originalYForThisRow - clearedRowsBelowCurrent * this.slotHeight;
                    var targetPosition = new pc.Vec3( rowParentGO.transform.localPosition.x, finalTargetY, rowParentGO.transform.localPosition.z );
                    DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(rowParentGO.transform, targetPosition.$clone(), this.rowMoveDownDuration), DG.Tweening.Ease.OutBounce));
                }
            },
            /*GridManager.MoveRemainingRowsDown end.*/

            /*GridManager.isRowClearedByRowIndex start.*/
            isRowClearedByRowIndex: function (index) {
                return index >= 0 && index < this.isRowCleared.length && this.isRowCleared != null && this.isRowCleared.length !== 0 && System.Nullable.eq(Bridge.as(System.Array.get(this.isRowCleared, index), System.Boolean, true), true);
            },
            /*GridManager.isRowClearedByRowIndex end.*/


        }
    });
    /*GridManager end.*/

    /*RowData start.*/
    Bridge.define("RowData", {
        fields: {
            material: null,
            wrongStuffCount: 0
        }
    });
    /*RowData end.*/

    /*Slot start.*/
    Bridge.define("Slot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            placedStuff: null,
            _renderer: null,
            isCorrectlyFilled: false,
            rowIndex: 0
        },
        methods: {
            /*Slot.Initialize start.*/
            Initialize: function (rowIndex, material) {
                this.rowIndex = rowIndex;
                if (UnityEngine.Component.op_Equality(this._renderer, null)) {
                    this._renderer = this.GetComponent(UnityEngine.Renderer);
                }
                this._renderer.material = material;
                this.isCorrectlyFilled = false;
            },
            /*Slot.Initialize end.*/

            /*Slot.PlaceStuff start.*/
            PlaceStuff: function (stuff) {
                this.placedStuff = stuff;
                stuff.transform.SetParent(this.transform);
                stuff.transform.localPosition = new pc.Vec3( -1.0, -1.0, -4.5 );
                stuff.transform.localScale = new pc.Vec3( 1, 1, 1 );
                this.isCorrectlyFilled = stuff.rowIndex === this.rowIndex;
            },
            /*Slot.PlaceStuff end.*/

            /*Slot.ClearStuff start.*/
            ClearStuff: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.placedStuff, null)) {
                    this.placedStuff.gameObject.SetActive(false);
                    this.placedStuff = null;
                }
                this.isCorrectlyFilled = false;
            },
            /*Slot.ClearStuff end.*/


        }
    });
    /*Slot end.*/

    /*Stuff start.*/
    Bridge.define("Stuff", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            dragManager: null,
            _renderer: null,
            rowIndex: 0
        },
        methods: {
            /*Stuff.Initialize start.*/
            Initialize: function (rowIndex, material) {
                this.rowIndex = rowIndex;
                if (UnityEngine.Component.op_Equality(this._renderer, null)) {
                    this._renderer = this.GetComponent(UnityEngine.Renderer);
                }
                this._renderer.material = material;
                if (UnityEngine.MonoBehaviour.op_Equality(this.dragManager, null)) {
                    this.dragManager = UnityEngine.Object.FindObjectOfType(DragAndDropManager);
                    if (UnityEngine.MonoBehaviour.op_Equality(this.dragManager, null)) {
                        UnityEngine.Debug.LogError$2("DragAndDropManager\uac00 Scene\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    }
                }
            },
            /*Stuff.Initialize end.*/

            /*Stuff.OnMouseDown start.*/
            OnMouseDown: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.dragManager, null)) {
                    this.dragManager.StartDrag(this);
                }
            },
            /*Stuff.OnMouseDown end.*/

            /*Stuff.OnMouseDrag start.*/
            OnMouseDrag: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.dragManager, null)) {
                    this.dragManager.Drag(this);
                }
            },
            /*Stuff.OnMouseDrag end.*/

            /*Stuff.OnMouseUp start.*/
            OnMouseUp: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.dragManager, null)) {
                    this.dragManager.EndDrag(this);
                }
            },
            /*Stuff.OnMouseUp end.*/


        }
    });
    /*Stuff end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            textBackGroundObject: null,
            idlePromptText: null,
            startY: 0,
            endY: 0,
            moveDuration: 0,
            idlePromptTween: null,
            isIdleAnimationPlaying: false
        },
        ctors: {
            init: function () {
                this.startY = 150.0;
                this.endY = 160.0;
                this.moveDuration = 1.0;
                this.isIdleAnimationPlaying = false;
            }
        },
        methods: {
            /*UIManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(UIManager.Instance, null)) {
                    UIManager.Instance = this;
                } else {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*UIManager.Awake end.*/

            /*UIManager.Start start.*/
            Start: function () {
                if (UnityEngine.MonoBehaviour.op_Inequality(this.idlePromptText, null)) {
                    this.idlePromptText.gameObject.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.textBackGroundObject, null)) {
                    this.textBackGroundObject.SetActive(false);
                }
            },
            /*UIManager.Start end.*/

            /*UIManager.SetIdlePromptActive start.*/
            SetIdlePromptActive: function (isActive) {
                if (UnityEngine.MonoBehaviour.op_Equality(this.idlePromptText, null)) {
                    return;
                }
                if (isActive) {
                    if (!this.isIdleAnimationPlaying) {
                        this.isIdleAnimationPlaying = true;
                        this.textBackGroundObject.SetActive(true);
                        this.idlePromptText.gameObject.SetActive(true);
                        this.idlePromptTween != null ? DG.Tweening.TweenExtensions.Kill(this.idlePromptTween) : null;
                        var rectTransform = this.idlePromptText.rectTransform$1;
                        var startPos = rectTransform.anchoredPosition.$clone();
                        startPos.y = this.startY;
                        rectTransform.anchoredPosition = startPos.$clone();
                        this.idlePromptTween = DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.DOTween.Sequence(), DG.Tweening.DOTweenModuleUI.DOAnchorPosY(rectTransform, this.endY, this.moveDuration)), DG.Tweening.DOTweenModuleUI.DOAnchorPosY(rectTransform, this.startY, this.moveDuration)), DG.Tweening.Ease.InOutSine), -1);
                    }
                } else {
                    this.isIdleAnimationPlaying = false;
                    this.idlePromptTween != null ? DG.Tweening.TweenExtensions.Kill(this.idlePromptTween) : null;
                    this.textBackGroundObject.SetActive(false);
                    this.idlePromptText.gameObject.SetActive(false);
                }
            },
            /*UIManager.SetIdlePromptActive end.*/


        }
    });
    /*UIManager end.*/

    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem start.*/
    Bridge.define("UnityEngine.UI.Extensions.CasualGame.UIParticleSystem", {
        inherits: [UnityEngine.UI.MaskableGraphic],
        statics: {
            fields: {
                DefaultShaderPath: null,
                MainTex: 0
            },
            ctors: {
                init: function () {
                    this.DefaultShaderPath = "UI/Additive";
                    this.MainTex = UnityEngine.Shader.PropertyToID("_MainTex");
                }
            }
        },
        fields: {
            fixedTime: false,
            use3dRotation: false,
            _transform: null,
            _pSystem: null,
            _particles: null,
            _quad: null,
            _imageUV: null,
            _textureSheetAnimation: null,
            _textureSheetAnimationFrames: 0,
            _textureSheetAnimationFrameSize: null,
            _pRenderer: null,
            _isInitialised: false,
            _currentMaterial: null,
            _currentTexture: null,
            _mainModule: null
        },
        props: {
            mainTexture: {
                get: function () {
                    return this._currentTexture;
                }
            }
        },
        ctors: {
            init: function () {
                this._imageUV = new UnityEngine.Vector4();
                this._textureSheetAnimationFrameSize = new UnityEngine.Vector2();
                this.fixedTime = true;
                this._quad = System.Array.init(4, function (){
                    return new UnityEngine.UIVertex();
                }, UnityEngine.UIVertex);
                this._imageUV = pc.Vec4.ZERO.clone();
            }
        },
        methods: {
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Initialize start.*/
            Initialize: function () {
                if (UnityEngine.Component.op_Equality(this._transform, null)) {
                    this._transform = this.transform;
                }
                if (UnityEngine.Component.op_Equality(this._pSystem, null)) {
                    this._pSystem = this.GetComponent(UnityEngine.ParticleSystem);
                    if (UnityEngine.Component.op_Equality(this._pSystem, null)) {
                        return false;
                    }
                    this._mainModule = this._pSystem.main;
                    if (this._pSystem.main.maxParticles > 14000) {
                        this._mainModule.maxParticles = 14000;
                    }
                    this._pRenderer = this._pSystem.GetComponent(UnityEngine.ParticleSystemRenderer);
                    if (UnityEngine.Component.op_Inequality(this._pRenderer, null)) {
                        this._pRenderer.enabled = false;
                    }
                    if (this.material == null) {
                        var defaultShader = UnityEngine.Shader.Find("UI/Additive");
                        if (defaultShader != null) {
                            this.material = new UnityEngine.Material.$ctor2(defaultShader);
                        }
                    }
                    this._currentMaterial = this.material;
                    if (UnityEngine.Object.op_Implicit(this._currentMaterial) && this._currentMaterial.HasProperty(UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.MainTex)) {
                        this._currentTexture = this._currentMaterial.mainTexture;
                        if (this._currentTexture == null) {
                            this._currentTexture = UnityEngine.Texture2D.whiteTexture;
                        }
                    }
                    this.material = this._currentMaterial;
                    this._mainModule.scalingMode = UnityEngine.ParticleSystemScalingMode.Hierarchy;
                    this._particles = null;
                }
                if (this._particles == null) {
                    this._particles = System.Array.init(this._pSystem.main.maxParticles, function (){
                        return new UnityEngine.ParticleSystem.Particle();
                    }, UnityEngine.ParticleSystem.Particle);
                }
                this._imageUV = new pc.Vec4( 0.0, 0.0, 1.0, 1.0 );
                this._textureSheetAnimation = this._pSystem.textureSheetAnimation;
                this._textureSheetAnimationFrames = 0;
                this._textureSheetAnimationFrameSize = pc.Vec2.ZERO.clone();
                if (!this._textureSheetAnimation.enabled) {
                    return true;
                }
                this._textureSheetAnimationFrames = Bridge.Int.mul(this._textureSheetAnimation.numTilesX, this._textureSheetAnimation.numTilesY);
                this._textureSheetAnimationFrameSize = new pc.Vec2( 1.0 / this._textureSheetAnimation.numTilesX, 1.0 / this._textureSheetAnimation.numTilesY );
                return true;
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Initialize end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Awake start.*/
            Awake: function () {
                UnityEngine.UI.MaskableGraphic.prototype.Awake.call(this);
                if (!this.Initialize()) {
                    Bridge.ensureBaseProperty(this, "enabled").$UnityEngine$Component$enabled = false;
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Awake end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
                var $t, $t1;
                vh.Clear();
                if (!Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeInHierarchy) {
                    return;
                }
                if (!this._isInitialised && !this._pSystem.main.playOnAwake) {
                    this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    this._isInitialised = true;
                }
                var temp = pc.Vec2.ZERO.clone();
                var corner1 = pc.Vec2.ZERO.clone();
                var corner2 = pc.Vec2.ZERO.clone();
                var count = this._pSystem.GetParticles(this._particles);
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var particle = this._particles[i].$clone();
                    var position = UnityEngine.Vector2.FromVector3(((this._mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local) ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position)));
                    var rotation = (0.0 - particle.rotation) * (0.0174532924);
                    var rotation2 = rotation + 1.57079637;
                    var particleColor = particle.GetCurrentColor(this._pSystem);
                    var size = particle.GetCurrentSize(this._pSystem) * 0.5;
                    if (this._mainModule.scalingMode === UnityEngine.ParticleSystemScalingMode.Shape) {
                        position = position.$clone().scale( 1.0 / ( this.canvas.scaleFactor ) );
                    }
                    var particleUV = this._imageUV.$clone();
                    if (this._textureSheetAnimation.enabled) {
                        var frameProgress = 1.0 - particle.remainingLifetime / particle.startLifetime;
                        if (this._textureSheetAnimation.frameOverTime.curveMin != null) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.curveMin.value(1.0 - particle.remainingLifetime / particle.startLifetime);
                        } else if (this._textureSheetAnimation.frameOverTime.curveMax != null) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.curveMax.value(1.0 - particle.remainingLifetime / particle.startLifetime);
                        } else if (this._textureSheetAnimation.frameOverTime.constantMax > 0.0) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.constantMax - particle.remainingLifetime / particle.startLifetime;
                        }
                        frameProgress = ($t = frameProgress * this._textureSheetAnimation.cycleCount, $t - Math.floor($t / 1.0) * 1.0);
                        var frame = 0;
                        switch (this._textureSheetAnimation.animation) {
                            case UnityEngine.ParticleSystemAnimationType.WholeSheet: 
                                frame = Math.floor(frameProgress * this._textureSheetAnimationFrames);
                                break;
                            case UnityEngine.ParticleSystemAnimationType.SingleRow: 
                                {
                                    frame = Math.floor(frameProgress * this._textureSheetAnimation.numTilesX);
                                    var row = this._textureSheetAnimation.rowIndex;
                                    frame = (frame + (Bridge.Int.mul(row, this._textureSheetAnimation.numTilesX))) | 0;
                                    break;
                                }
                        }
                        frame = frame % this._textureSheetAnimationFrames;
                        particleUV.x = (frame % this._textureSheetAnimation.numTilesX) * this._textureSheetAnimationFrameSize.x;
                        particleUV.y = 1.0 - Math.floor(frame / this._textureSheetAnimation.numTilesX) * this._textureSheetAnimationFrameSize.y;
                        particleUV.z = particleUV.x + this._textureSheetAnimationFrameSize.x;
                        particleUV.w = particleUV.y + this._textureSheetAnimationFrameSize.y;
                    }
                    temp.x = particleUV.x;
                    temp.y = particleUV.y;
                    this._quad[0] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[0].color = particleColor.$clone();
                    this._quad[0].uv0 = temp.$clone();
                    temp.x = particleUV.x;
                    temp.y = particleUV.w;
                    this._quad[1] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[1].color = particleColor.$clone();
                    this._quad[1].uv0 = temp.$clone();
                    temp.x = particleUV.z;
                    temp.y = particleUV.w;
                    this._quad[2] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[2].color = particleColor.$clone();
                    this._quad[2].uv0 = temp.$clone();
                    temp.x = particleUV.z;
                    temp.y = particleUV.y;
                    this._quad[3] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[3].color = particleColor.$clone();
                    this._quad[3].uv0 = temp.$clone();
                    if (rotation === 0.0) {
                        corner1.x = position.x - size;
                        corner1.y = position.y - size;
                        corner2.x = position.x + size;
                        corner2.y = position.y + size;
                        temp.x = corner1.x;
                        temp.y = corner1.y;
                        this._quad[0].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner1.x;
                        temp.y = corner2.y;
                        this._quad[1].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner2.y;
                        this._quad[2].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner1.y;
                        this._quad[3].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                    } else if (this.use3dRotation) {
                        var pos3d = ((this._mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local) ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position));
                        var verts = System.Array.init([new pc.Vec3( 0.0 - size, 0.0 - size, 0.0 ), new pc.Vec3( 0.0 - size, size, 0.0 ), new pc.Vec3( size, size, 0.0 ), new pc.Vec3( size, 0.0 - size, 0.0 )], UnityEngine.Vector3);
                        var particleRotation = ($t1 = particle.rotation3D, new pc.Quat().setFromEulerAngles_Unity( $t1.x, $t1.y, $t1.z ));
                        this._quad[0].position = pos3d.$clone().add( particleRotation.transformVector( verts[0] ) );
                        this._quad[1].position = pos3d.$clone().add( particleRotation.transformVector( verts[1] ) );
                        this._quad[2].position = pos3d.$clone().add( particleRotation.transformVector( verts[2] ) );
                        this._quad[3].position = pos3d.$clone().add( particleRotation.transformVector( verts[3] ) );
                    } else {
                        var right = new pc.Vec2( Math.cos(rotation), Math.sin(rotation) ).scale( size );
                        var up = new pc.Vec2( Math.cos(rotation2), Math.sin(rotation2) ).scale( size );
                        this._quad[0].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).sub( up ));
                        this._quad[1].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).add( up ));
                        this._quad[2].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).add( up ));
                        this._quad[3].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).sub( up ));
                    }
                    vh.AddUIVertexQuad(this._quad);
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnPopulateMesh end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Update start.*/
            Update: function () {
                if (!this.fixedTime && UnityEngine.Application.isPlaying) {
                    this._pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                    this.SetAllDirty();
                    if ((!(this._currentMaterial == null) && !(Bridge.referenceEquals(this._currentTexture, this._currentMaterial.mainTexture))) || (!(this.material == null) && !(this._currentMaterial == null) && !(Bridge.referenceEquals(this.material.shader, this._currentMaterial.shader)))) {
                        this._pSystem = null;
                        this.Initialize();
                    }
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Update end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.LateUpdate start.*/
            LateUpdate: function () {
                if (!UnityEngine.Application.isPlaying) {
                    this.SetAllDirty();
                } else if (this.fixedTime) {
                    this._pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                    this.SetAllDirty();
                    if ((this._currentMaterial != null && !Bridge.referenceEquals(this._currentTexture, this._currentMaterial.mainTexture)) || (this.material != null && this._currentMaterial != null && !Bridge.referenceEquals(this.material.shader, this._currentMaterial.shader))) {
                        this._pSystem = null;
                        this.Initialize();
                    }
                }
                if (!(Bridge.referenceEquals(this.material, this._currentMaterial))) {
                    this._pSystem = null;
                    this.Initialize();
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.LateUpdate end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnDestroy start.*/
            OnDestroy: function () {
                this._currentMaterial = null;
                this._currentTexture = null;
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnDestroy end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StartParticleEmission start.*/
            StartParticleEmission: function () {
                this._pSystem.Play();
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StartParticleEmission end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StopParticleEmission start.*/
            StopParticleEmission: function () {
                this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StopParticleEmission end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.PauseParticleEmission start.*/
            PauseParticleEmission: function () {
                this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.PauseParticleEmission end.*/


        }
    });
    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections","TMPro","DG.Tweening","UnityEngine.UI","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*DragAndDropManager start.*/
    $m("DragAndDropManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Drag","t":8,"pi":[{"n":"stuff","pt":Stuff,"ps":0}],"sn":"Drag","rt":$n[0].Void,"p":[Stuff]},{"a":2,"n":"EndDrag","t":8,"pi":[{"n":"stuff","pt":Stuff,"ps":0}],"sn":"EndDrag","rt":$n[0].Void,"p":[Stuff]},{"a":2,"n":"StartDrag","t":8,"pi":[{"n":"stuff","pt":Stuff,"ps":0}],"sn":"StartDrag","rt":$n[0].Void,"p":[Stuff]},{"a":2,"n":"Instance","is":true,"t":16,"rt":DragAndDropManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":DragAndDropManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[DragAndDropManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"currentDragDepth","t":4,"rt":$n[0].Single,"sn":"currentDragDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentDraggedStuff","t":4,"rt":Stuff,"sn":"currentDraggedStuff"},{"a":1,"n":"dragOffsetFromCenter","t":4,"rt":$n[1].Vector3,"sn":"dragOffsetFromCenter"},{"at":[new UnityEngine.HeaderAttribute("\ub4dc\ub798\uadf8 \uc124\uc815"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragZOffset","t":4,"rt":$n[0].Single,"sn":"dragZOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalStuffParentSlot","t":4,"rt":Slot,"sn":"originalStuffParentSlot"},{"a":1,"n":"originalStuffPosition","t":4,"rt":$n[1].Vector3,"sn":"originalStuffPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotLayer","t":4,"rt":$n[1].LayerMask,"sn":"slotLayer"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":DragAndDropManager,"sn":"Instance"}]}; }, $n);
    /*DragAndDropManager end.*/

    /*EffectsManager start.*/
    $m("EffectsManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetFromPool","t":8,"pi":[{"n":"pool","pt":$n[2].Queue$1(UnityEngine.GameObject),"ps":0},{"n":"prefab","pt":$n[1].GameObject,"ps":1}],"sn":"GetFromPool","rt":$n[1].GameObject,"p":[$n[2].Queue$1(UnityEngine.GameObject),$n[1].GameObject]},{"a":1,"n":"InitializePools","t":8,"sn":"InitializePools","rt":$n[0].Void},{"a":2,"n":"PlayGoodTextEffect","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0}],"sn":"PlayGoodTextEffect","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"PlayRowClearEffect","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0}],"sn":"PlayRowClearEffect","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"ReturnToPoolAfterDuration","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0},{"n":"pool","pt":$n[2].Queue$1(UnityEngine.GameObject),"ps":1},{"n":"delay","pt":$n[0].Single,"ps":2}],"sn":"ReturnToPoolAfterDuration","rt":$n[3].IEnumerator,"p":[$n[1].GameObject,$n[2].Queue$1(UnityEngine.GameObject),$n[0].Single]},{"a":2,"n":"Instance","is":true,"t":16,"rt":EffectsManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":EffectsManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[EffectsManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"goodTextPool","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"goodTextPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goodTextPrefab","t":4,"rt":$n[1].GameObject,"sn":"goodTextPrefab"},{"at":[new UnityEngine.HeaderAttribute("\uc624\ube0c\uc81d\ud2b8 \ud480 \uc124\uc815"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolSize","t":4,"rt":$n[0].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"rowClearParticlePool","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"rowClearParticlePool"},{"at":[new UnityEngine.HeaderAttribute("\uc774\ud399\ud2b8 \ud504\ub9ac\ud339"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rowClearParticlePrefab","t":4,"rt":$n[1].GameObject,"sn":"rowClearParticlePrefab"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":EffectsManager,"sn":"Instance"}]}; }, $n);
    /*EffectsManager end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnPlayerInteraction","t":8,"sn":"OnPlayerInteraction","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("\uac8c\uc784 \ud50c\ub808\uc774 \uc124\uc815"),new UnityEngine.TooltipAttribute("\uc774 \uc2dc\uac04(\ucd08) \ub3d9\uc548 \uc870\uc791\uc774 \uc5c6\uc73c\uba74 \uc548\ub0b4 \ubb38\uad6c\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleTimeThreshold","t":4,"rt":$n[0].Single,"sn":"idleTimeThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"}]}; }, $n);
    /*GameManager end.*/

    /*GridManager start.*/
    $m("GridManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckRowClearance","t":8,"pi":[{"n":"rowToCheck","pt":$n[0].Int32,"ps":0}],"sn":"CheckRowClearance","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ClearAndHide","t":8,"pi":[{"n":"rowToHide","pt":$n[0].Int32,"ps":0}],"sn":"ClearAndHide","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"CreateGrid","t":8,"sn":"CreateGrid","rt":$n[0].Void},{"a":1,"n":"GetWrongIndexes","t":8,"pi":[{"n":"totalSlots","pt":$n[0].Int32,"ps":0},{"n":"wrongCount","pt":$n[0].Int32,"ps":1}],"sn":"GetWrongIndexes","rt":$n[2].HashSet$1(System.Int32),"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"MoveRemainingRowsDown","t":8,"pi":[{"n":"clearedRowIndex","pt":$n[0].Int32,"ps":0}],"sn":"MoveRemainingRowsDown","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"Shuffle","t":8,"pi":[{"n":"list","pt":$n[2].List$1(System.Object),"ps":0},{"n":"rng","pt":$n[0].Random,"ps":1}],"tpc":1,"tprm":["T"],"sn":"Shuffle","rt":$n[0].Void,"p":[$n[2].List$1(System.Object),$n[0].Random]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"isRowClearedByRowIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"isRowClearedByRowIndex","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Instance","is":true,"t":16,"rt":GridManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GridManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GridManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("\uaca9\uc790 \uc0dd\uc131 \uc124\uc815")],"a":1,"n":"TotalRows","is":true,"t":4,"rt":$n[0].Int32,"sn":"TotalRows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"gridSlotsByRow","t":4,"rt":$n[2].List$1(System.Array.type(Slot)),"sn":"gridSlotsByRow"},{"a":1,"n":"isRowCleared","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"isRowCleared"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelData","t":4,"rt":System.Array.type(RowData),"sn":"levelData"},{"at":[new UnityEngine.HeaderAttribute("\ud504\ub9ac\ud339 \uc124\uc815"),new UnityEngine.TooltipAttribute("\uc2ac\ub86f \ud504\ub9ac\ud339 \ubd80\ubaa8"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prefabsParent","t":4,"rt":$n[1].Transform,"sn":"prefabsParent"},{"at":[new UnityEngine.HeaderAttribute("\uc904 \ud074\ub9ac\uc5b4 \uc124\uc815"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rowMoveDownDuration","t":4,"rt":$n[0].Single,"sn":"rowMoveDownDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\uc904 \ubd80\ubaa8 GameObject \ud504\ub9ac\ud339 (\uc120\ud0dd\uc0ac\ud56d, \ube48 GameObject\uc5ec\ub3c4 \ub428)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rowParentPrefab","t":4,"rt":$n[1].GameObject,"sn":"rowParentPrefab"},{"a":1,"n":"rowParents","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"rowParents"},{"at":[new UnityEngine.TooltipAttribute("\uc2dc\ub4dc \uac12"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"seed","t":4,"rt":$n[0].Int32,"sn":"seed","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("\uac00\ub85c \uac04\uaca9"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotHeight","t":4,"rt":$n[0].Single,"sn":"slotHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\uc2ac\ub86f \ud504\ub9ac\ud339"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotPrefab","t":4,"rt":$n[1].GameObject,"sn":"slotPrefab"},{"at":[new UnityEngine.TooltipAttribute("\uc2ac\ub86f \ud504\ub9ac\ud339 \ud06c\uae30"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotScale","t":4,"rt":$n[0].Single,"sn":"slotScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\uc2ac\ub86f \ud504\ub9ac\ud339 \uc124\uc815"),new UnityEngine.TooltipAttribute("\uc138\ub85c \uac04\uaca9"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slotWidth","t":4,"rt":$n[0].Single,"sn":"slotWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\ubb3c\uac74 \ud504\ub9ac\ud339"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stuffPrefab","t":4,"rt":$n[1].GameObject,"sn":"stuffPrefab"},{"at":[new UnityEngine.TooltipAttribute("\ubb3c\uac74 \ud504\ub9ac\ud339 \ud06c\uae30"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stuffScale","t":4,"rt":$n[0].Single,"sn":"stuffScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"totalGridHeight","t":4,"rt":$n[0].Single,"sn":"totalGridHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("\uaca9\uc790 \uc804\uccb4 Y \uc704\uce58 \ucd94\uac00 \uc870\uc808"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"verticalOffset","t":4,"rt":$n[0].Single,"sn":"verticalOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GridManager,"sn":"Instance"}]}; }, $n);
    /*GridManager end.*/

    /*RowData start.*/
    $m("RowData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"},{"at":[new UnityEngine.RangeAttribute(0.0, 9.0)],"a":2,"n":"wrongStuffCount","t":4,"rt":$n[0].Int32,"sn":"wrongStuffCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*RowData end.*/

    /*Slot start.*/
    $m("Slot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClearStuff","t":8,"sn":"ClearStuff","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"rowIndex","pt":$n[0].Int32,"ps":0},{"n":"material","pt":$n[1].Material,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Material]},{"a":2,"n":"PlaceStuff","t":8,"pi":[{"n":"stuff","pt":Stuff,"ps":0}],"sn":"PlaceStuff","rt":$n[0].Void,"p":[Stuff]},{"a":2,"n":"rowIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_rowIndex","t":8,"rt":$n[0].Int32,"fg":"rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_rowIndex","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"rowIndex"},"fn":"rowIndex"},{"a":1,"n":"_renderer","t":4,"rt":$n[1].Renderer,"sn":"_renderer"},{"a":2,"n":"isCorrectlyFilled","t":4,"rt":$n[0].Boolean,"sn":"isCorrectlyFilled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"placedStuff","t":4,"rt":Stuff,"sn":"placedStuff"},{"a":1,"backing":true,"n":"<rowIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Slot end.*/

    /*Stuff start.*/
    $m("Stuff", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"rowIndex","pt":$n[0].Int32,"ps":0},{"n":"material","pt":$n[1].Material,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Material]},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseDrag","t":8,"sn":"OnMouseDrag","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":2,"n":"rowIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_rowIndex","t":8,"rt":$n[0].Int32,"fg":"rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_rowIndex","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"rowIndex"},"fn":"rowIndex"},{"a":2,"n":"_renderer","t":4,"rt":$n[1].Renderer,"sn":"_renderer"},{"a":1,"n":"dragManager","t":4,"rt":DragAndDropManager,"sn":"dragManager"},{"a":1,"backing":true,"n":"<rowIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Stuff end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"SetIdlePromptActive","t":8,"pi":[{"n":"isActive","pt":$n[0].Boolean,"ps":0}],"sn":"SetIdlePromptActive","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":UIManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":UIManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[UIManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.TooltipAttribute("\uc6c0\uc9c1\uc784\uc774 \ub3c4\ub2ec\ud560 Y \uc704\uce58"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endY","t":4,"rt":$n[0].Single,"sn":"endY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idlePromptText","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"idlePromptText"},{"a":1,"n":"idlePromptTween","t":4,"rt":$n[5].Tween,"sn":"idlePromptTween"},{"a":1,"n":"isIdleAnimationPlaying","t":4,"rt":$n[0].Boolean,"sn":"isIdleAnimationPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("\uc2dc\uc791\uc810\uc5d0\uc11c \ub05d\uc810\uae4c\uc9c0 \uac00\ub294 \ub370 \uac78\ub9ac\ub294 \uc2dc\uac04"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("\uc560\ub2c8\uba54\uc774\uc158 \uc124\uc815"),new UnityEngine.TooltipAttribute("\uc6c0\uc9c1\uc784\uc774 \uc2dc\uc791\ub420 Y \uc704\uce58"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startY","t":4,"rt":$n[0].Single,"sn":"startY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI \uc694\uc18c"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textBackGroundObject","t":4,"rt":$n[1].GameObject,"sn":"textBackGroundObject"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":UIManager,"sn":"Instance"}]}; }, $n);
    /*UIManager end.*/

    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem start.*/
    $m("UnityEngine.UI.Extensions.CasualGame.UIParticleSystem", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute(),new UnityEngine.RequireComponent.$ctor1(UnityEngine.CanvasRenderer, UnityEngine.ParticleSystem),new UnityEngine.AddComponentMenu.ctor("UI/Effects/Extensions/UIParticleSystem")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[6].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[0].Void,"p":[$n[6].VertexHelper]},{"a":2,"n":"PauseParticleEmission","t":8,"sn":"PauseParticleEmission","rt":$n[0].Void},{"a":2,"n":"StartParticleEmission","t":8,"sn":"StartParticleEmission","rt":$n[0].Void},{"a":2,"n":"StopParticleEmission","t":8,"sn":"StopParticleEmission","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"ov":true,"a":2,"n":"mainTexture","t":16,"rt":$n[1].Texture,"g":{"ov":true,"a":2,"n":"get_mainTexture","t":8,"rt":$n[1].Texture,"fg":"mainTexture"},"fn":"mainTexture"},{"a":1,"n":"DefaultShaderPath","is":true,"t":4,"rt":$n[0].String,"sn":"DefaultShaderPath"},{"a":1,"n":"MainTex","is":true,"t":4,"rt":$n[0].Int32,"sn":"MainTex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_currentMaterial","t":4,"rt":$n[1].Material,"sn":"_currentMaterial"},{"a":1,"n":"_currentTexture","t":4,"rt":$n[1].Texture,"sn":"_currentTexture"},{"a":1,"n":"_imageUV","t":4,"rt":$n[1].Vector4,"sn":"_imageUV"},{"a":1,"n":"_isInitialised","t":4,"rt":$n[0].Boolean,"sn":"_isInitialised","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_mainModule","t":4,"rt":pc.ParticleSystemMain,"sn":"_mainModule"},{"a":1,"n":"_pRenderer","t":4,"rt":$n[1].ParticleSystemRenderer,"sn":"_pRenderer"},{"a":1,"n":"_pSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_pSystem"},{"a":1,"n":"_particles","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem.Particle),"sn":"_particles"},{"a":1,"n":"_quad","t":4,"rt":System.Array.type(UnityEngine.UIVertex),"sn":"_quad","ro":true},{"a":1,"n":"_textureSheetAnimation","t":4,"rt":pc.ParticleSystemTextureSheetAnimation,"sn":"_textureSheetAnimation"},{"a":1,"n":"_textureSheetAnimationFrameSize","t":4,"rt":$n[1].Vector2,"sn":"_textureSheetAnimationFrameSize"},{"a":1,"n":"_textureSheetAnimationFrames","t":4,"rt":$n[0].Int32,"sn":"_textureSheetAnimationFrames","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_transform","t":4,"rt":$n[1].Transform,"sn":"_transform"},{"at":[new UnityEngine.TooltipAttribute("Having this enabled run the system in LateUpdate rather than in Update making it faster but less precise (more clunky)")],"a":2,"n":"fixedTime","t":4,"rt":$n[0].Boolean,"sn":"fixedTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Enables 3d rotation for the particles")],"a":2,"n":"use3dRotation","t":4,"rt":$n[0].Boolean,"sn":"use3dRotation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[5].DOTweenCYInstruction.WaitForCompletion,$n[5].DOTweenCYInstruction.WaitForRewind,$n[5].DOTweenCYInstruction.WaitForKill,$n[5].DOTweenCYInstruction.WaitForElapsedLoops,$n[5].DOTweenCYInstruction.WaitForPosition,$n[5].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[5].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[5].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[5].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[5].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[5].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[6].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[5].Tweener,"p":[$n[6].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[5].Tweener,"p":[$n[6].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[6].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[6].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[5].Tweener,"p":[$n[6].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[5].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[5].Tweener,"p":[$n[6].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[5].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[6].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[5].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[5].Tweener,"p":[$n[6].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[5].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[5].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[5].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[5].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[5].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[5].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
