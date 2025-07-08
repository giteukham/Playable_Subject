var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSpring' )
  var i683 = data
  i682.spring = i683[0]
  i682.damper = i683[1]
  i682.targetPosition = i683[2]
  return i682
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor' )
  var i685 = data
  i684.m_TargetVelocity = i685[0]
  i684.m_Force = i685[1]
  i684.m_FreeSpin = i685[2]
  return i684
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointLimits' )
  var i687 = data
  i686.m_Min = i687[0]
  i686.m_Max = i687[1]
  i686.m_Bounciness = i687[2]
  i686.m_BounceMinVelocity = i687[3]
  i686.m_ContactDistance = i687[4]
  i686.minBounce = i687[5]
  i686.maxBounce = i687[6]
  return i686
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointDrive' )
  var i689 = data
  i688.m_PositionSpring = i689[0]
  i688.m_PositionDamper = i689[1]
  i688.m_MaximumForce = i689[2]
  i688.m_UseAcceleration = i689[3]
  return i688
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i691 = data
  i690.m_Spring = i691[0]
  i690.m_Damper = i691[1]
  return i690
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i693 = data
  i692.m_Limit = i693[0]
  i692.m_Bounciness = i693[1]
  i692.m_ContactDistance = i693[2]
  return i692
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i695 = data
  i694.m_ExtremumSlip = i695[0]
  i694.m_ExtremumValue = i695[1]
  i694.m_AsymptoteSlip = i695[2]
  i694.m_AsymptoteValue = i695[3]
  i694.m_Stiffness = i695[4]
  return i694
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i697 = data
  i696.m_LowerAngle = i697[0]
  i696.m_UpperAngle = i697[1]
  return i696
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i699 = data
  i698.m_MotorSpeed = i699[0]
  i698.m_MaximumMotorTorque = i699[1]
  return i698
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i701 = data
  i700.m_DampingRatio = i701[0]
  i700.m_Frequency = i701[1]
  i700.m_Angle = i701[2]
  return i700
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i703 = data
  i702.m_LowerTranslation = i703[0]
  i702.m_UpperTranslation = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i705 = data
  i704.position = new pc.Vec3( i705[0], i705[1], i705[2] )
  i704.scale = new pc.Vec3( i705[3], i705[4], i705[5] )
  i704.rotation = new pc.Quat(i705[6], i705[7], i705[8], i705[9])
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i707 = data
  i706.name = i707[0]
  i706.tagId = i707[1]
  i706.enabled = !!i707[2]
  i706.isStatic = !!i707[3]
  i706.layer = i707[4]
  return i706
}

Deserializers["Slot"] = function (request, data, root) {
  var i708 = root || request.c( 'Slot' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'placedStuff')
  i708.isCorrectlyFilled = !!i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'sharedMesh')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'additionalVertexStreams')
  i712.enabled = !!i713[2]
  request.r(i713[3], i713[4], 0, i712, 'sharedMaterial')
  var i715 = i713[5]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.sharedMaterials = i714
  i712.receiveShadows = !!i713[6]
  i712.shadowCastingMode = i713[7]
  i712.sortingLayerID = i713[8]
  i712.sortingOrder = i713[9]
  i712.lightmapIndex = i713[10]
  i712.lightmapSceneIndex = i713[11]
  i712.lightmapScaleOffset = new pc.Vec4( i713[12], i713[13], i713[14], i713[15] )
  i712.lightProbeUsage = i713[16]
  i712.reflectionProbeUsage = i713[17]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i719 = data
  i718.center = new pc.Vec3( i719[0], i719[1], i719[2] )
  i718.size = new pc.Vec3( i719[3], i719[4], i719[5] )
  i718.enabled = !!i719[6]
  i718.isTrigger = !!i719[7]
  request.r(i719[8], i719[9], 0, i718, 'material')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i721 = data
  i720.name = i721[0]
  i720.halfPrecision = !!i721[1]
  i720.useUInt32IndexFormat = !!i721[2]
  i720.vertexCount = i721[3]
  i720.aabb = i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( !!i723[i + 0] );
  }
  i720.streams = i722
  i720.vertices = i721[6]
  var i725 = i721[7]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i725[i + 0]) );
  }
  i720.subMeshes = i724
  var i727 = i721[8]
  var i726 = []
  for(var i = 0; i < i727.length; i += 16) {
    i726.push( new pc.Mat4().setData(i727[i + 0], i727[i + 1], i727[i + 2], i727[i + 3],  i727[i + 4], i727[i + 5], i727[i + 6], i727[i + 7],  i727[i + 8], i727[i + 9], i727[i + 10], i727[i + 11],  i727[i + 12], i727[i + 13], i727[i + 14], i727[i + 15]) );
  }
  i720.bindposes = i726
  var i729 = i721[9]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i729[i + 0]) );
  }
  i720.blendShapes = i728
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i735 = data
  i734.triangles = i735[0]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i741 = data
  i740.name = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i743[i + 0]) );
  }
  i740.frames = i742
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i744 = root || new pc.UnityMaterial()
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'shader')
  i744.renderQueue = i745[3]
  i744.enableInstancing = !!i745[4]
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i747[i + 0]) );
  }
  i744.floatParameters = i746
  var i749 = i745[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i749[i + 0]) );
  }
  i744.colorParameters = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i751[i + 0]) );
  }
  i744.vectorParameters = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i753[i + 0]) );
  }
  i744.textureParameters = i752
  var i755 = i745[9]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i755[i + 0]) );
  }
  i744.materialFlags = i754
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Color(i763[1], i763[2], i763[3], i763[4])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Vec4( i767[1], i767[2], i767[3], i767[4] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i775 = data
  i774.name = i775[0]
  i774.enabled = !!i775[1]
  return i774
}

Deserializers["Stuff"] = function (request, data, root) {
  var i776 = root || request.c( 'Stuff' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, '_renderer')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i779 = data
  i778.name = i779[0]
  i778.width = i779[1]
  i778.height = i779[2]
  i778.mipmapCount = i779[3]
  i778.anisoLevel = i779[4]
  i778.filterMode = i779[5]
  i778.hdr = !!i779[6]
  i778.format = i779[7]
  i778.wrapMode = i779[8]
  i778.alphaIsTransparency = !!i779[9]
  i778.alphaSource = i779[10]
  i778.graphicsFormat = i779[11]
  i778.sRGBTexture = !!i779[12]
  i778.desiredColorSpace = i779[13]
  i778.wrapU = i779[14]
  i778.wrapV = i779[15]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i781 = data
  i780.pivot = new pc.Vec2( i781[0], i781[1] )
  i780.anchorMin = new pc.Vec2( i781[2], i781[3] )
  i780.anchorMax = new pc.Vec2( i781[4], i781[5] )
  i780.sizeDelta = new pc.Vec2( i781[6], i781[7] )
  i780.anchoredPosition3D = new pc.Vec3( i781[8], i781[9], i781[10] )
  i780.rotation = new pc.Quat(i781[11], i781[12], i781[13], i781[14])
  i780.scale = new pc.Vec3( i781[15], i781[16], i781[17] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i783 = data
  i782.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i783[0], i782.main)
  i782.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i783[1], i782.colorBySpeed)
  i782.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i783[2], i782.colorOverLifetime)
  i782.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i783[3], i782.emission)
  i782.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i783[4], i782.rotationBySpeed)
  i782.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i783[5], i782.rotationOverLifetime)
  i782.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i783[6], i782.shape)
  i782.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i783[7], i782.sizeBySpeed)
  i782.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i783[8], i782.sizeOverLifetime)
  i782.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i783[9], i782.textureSheetAnimation)
  i782.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i783[10], i782.velocityOverLifetime)
  i782.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i783[11], i782.noise)
  i782.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i783[12], i782.inheritVelocity)
  i782.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i783[13], i782.forceOverLifetime)
  i782.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i783[14], i782.limitVelocityOverLifetime)
  i782.useAutoRandomSeed = !!i783[15]
  i782.randomSeed = i783[16]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemMain()
  var i785 = data
  i784.duration = i785[0]
  i784.loop = !!i785[1]
  i784.prewarm = !!i785[2]
  i784.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.startDelay)
  i784.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.startLifetime)
  i784.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[5], i784.startSpeed)
  i784.startSize3D = !!i785[6]
  i784.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[7], i784.startSizeX)
  i784.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[8], i784.startSizeY)
  i784.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[9], i784.startSizeZ)
  i784.startRotation3D = !!i785[10]
  i784.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.startRotationX)
  i784.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[12], i784.startRotationY)
  i784.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[13], i784.startRotationZ)
  i784.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[14], i784.startColor)
  i784.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.gravityModifier)
  i784.simulationSpace = i785[16]
  request.r(i785[17], i785[18], 0, i784, 'customSimulationSpace')
  i784.simulationSpeed = i785[19]
  i784.useUnscaledTime = !!i785[20]
  i784.scalingMode = i785[21]
  i784.playOnAwake = !!i785[22]
  i784.maxParticles = i785[23]
  i784.emitterVelocityMode = i785[24]
  i784.stopAction = i785[25]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i786 = root || new pc.MinMaxCurve()
  var i787 = data
  i786.mode = i787[0]
  i786.curveMin = new pc.AnimationCurve( { keys_flow: i787[1] } )
  i786.curveMax = new pc.AnimationCurve( { keys_flow: i787[2] } )
  i786.curveMultiplier = i787[3]
  i786.constantMin = i787[4]
  i786.constantMax = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i788 = root || new pc.MinMaxGradient()
  var i789 = data
  i788.mode = i789[0]
  i788.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i789[1], i788.gradientMin)
  i788.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i789[2], i788.gradientMax)
  i788.colorMin = new pc.Color(i789[3], i789[4], i789[5], i789[6])
  i788.colorMax = new pc.Color(i789[7], i789[8], i789[9], i789[10])
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i791 = data
  i790.mode = i791[0]
  var i793 = i791[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i793[i + 0]) );
  }
  i790.colorKeys = i792
  var i795 = i791[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i795[i + 0]) );
  }
  i790.alphaKeys = i794
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemColorBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i797[1], i796.color)
  i796.range = new pc.Vec2( i797[2], i797[3] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i801 = data
  i800.color = new pc.Color(i801[0], i801[1], i801[2], i801[3])
  i800.time = i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i805 = data
  i804.alpha = i805[0]
  i804.time = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemColorOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[1], i806.color)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemEmitter()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.rateOverTime)
  i808.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.rateOverDistance)
  var i811 = i809[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i811[i + 0]) );
  }
  i808.bursts = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemBurst()
  var i815 = data
  i814.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[0], i814.count)
  i814.cycleCount = i815[1]
  i814.minCount = i815[2]
  i814.maxCount = i815[3]
  i814.repeatInterval = i815[4]
  i814.time = i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemRotationBySpeed()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  i816.range = new pc.Vec2( i817[5], i817[6] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemRotationOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemShape()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.shapeType = i821[1]
  i820.randomDirectionAmount = i821[2]
  i820.sphericalDirectionAmount = i821[3]
  i820.randomPositionAmount = i821[4]
  i820.alignToDirection = !!i821[5]
  i820.radius = i821[6]
  i820.radiusMode = i821[7]
  i820.radiusSpread = i821[8]
  i820.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[9], i820.radiusSpeed)
  i820.radiusThickness = i821[10]
  i820.angle = i821[11]
  i820.length = i821[12]
  i820.boxThickness = new pc.Vec3( i821[13], i821[14], i821[15] )
  i820.meshShapeType = i821[16]
  request.r(i821[17], i821[18], 0, i820, 'mesh')
  request.r(i821[19], i821[20], 0, i820, 'meshRenderer')
  request.r(i821[21], i821[22], 0, i820, 'skinnedMeshRenderer')
  i820.useMeshMaterialIndex = !!i821[23]
  i820.meshMaterialIndex = i821[24]
  i820.useMeshColors = !!i821[25]
  i820.normalOffset = i821[26]
  i820.arc = i821[27]
  i820.arcMode = i821[28]
  i820.arcSpread = i821[29]
  i820.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[30], i820.arcSpeed)
  i820.donutRadius = i821[31]
  i820.position = new pc.Vec3( i821[32], i821[33], i821[34] )
  i820.rotation = new pc.Vec3( i821[35], i821[36], i821[37] )
  i820.scale = new pc.Vec3( i821[38], i821[39], i821[40] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemSizeBySpeed()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  i822.range = new pc.Vec2( i823[5], i823[6] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemSizeOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.mode = i827[1]
  i826.animation = i827[2]
  i826.numTilesX = i827[3]
  i826.numTilesY = i827[4]
  i826.useRandomRow = !!i827[5]
  i826.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[6], i826.frameOverTime)
  i826.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.startFrame)
  i826.cycleCount = i827[8]
  i826.rowIndex = i827[9]
  i826.flipU = i827[10]
  i826.flipV = i827[11]
  i826.spriteCount = i827[12]
  var i829 = i827[13]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sprites = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[4], i832.radial)
  i832.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[5], i832.speedModifier)
  i832.space = i833[6]
  i832.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[7], i832.orbitalX)
  i832.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[8], i832.orbitalY)
  i832.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[9], i832.orbitalZ)
  i832.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[10], i832.orbitalOffsetX)
  i832.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[11], i832.orbitalOffsetY)
  i832.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[12], i832.orbitalOffsetZ)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemNoise()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.separateAxes = !!i835[1]
  i834.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.strengthX)
  i834.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.strengthY)
  i834.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.strengthZ)
  i834.frequency = i835[5]
  i834.damping = !!i835[6]
  i834.octaveCount = i835[7]
  i834.octaveMultiplier = i835[8]
  i834.octaveScale = i835[9]
  i834.quality = i835[10]
  i834.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[11], i834.scrollSpeed)
  i834.scrollSpeedMultiplier = i835[12]
  i834.remapEnabled = !!i835[13]
  i834.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[14], i834.remapX)
  i834.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[15], i834.remapY)
  i834.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[16], i834.remapZ)
  i834.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[17], i834.positionAmount)
  i834.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[18], i834.rotationAmount)
  i834.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[19], i834.sizeAmount)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemInheritVelocity()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.mode = i837[1]
  i836.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.curve)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemForceOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.space = i839[4]
  i838.randomized = !!i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.limit)
  i840.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.limitX)
  i840.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.limitY)
  i840.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.limitZ)
  i840.dampen = i841[5]
  i840.separateAxes = !!i841[6]
  i840.space = i841[7]
  i840.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[8], i840.drag)
  i840.multiplyDragByParticleSize = !!i841[9]
  i840.multiplyDragByParticleVelocity = !!i841[10]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i843 = data
  i842.enabled = !!i843[0]
  request.r(i843[1], i843[2], 0, i842, 'sharedMaterial')
  var i845 = i843[3]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[4]
  i842.shadowCastingMode = i843[5]
  i842.sortingLayerID = i843[6]
  i842.sortingOrder = i843[7]
  i842.lightmapIndex = i843[8]
  i842.lightmapSceneIndex = i843[9]
  i842.lightmapScaleOffset = new pc.Vec4( i843[10], i843[11], i843[12], i843[13] )
  i842.lightProbeUsage = i843[14]
  i842.reflectionProbeUsage = i843[15]
  request.r(i843[16], i843[17], 0, i842, 'mesh')
  i842.meshCount = i843[18]
  i842.activeVertexStreamsCount = i843[19]
  i842.alignment = i843[20]
  i842.renderMode = i843[21]
  i842.sortMode = i843[22]
  i842.lengthScale = i843[23]
  i842.velocityScale = i843[24]
  i842.cameraVelocityScale = i843[25]
  i842.normalDirection = i843[26]
  i842.sortingFudge = i843[27]
  i842.minParticleSize = i843[28]
  i842.maxParticleSize = i843[29]
  i842.pivot = new pc.Vec3( i843[30], i843[31], i843[32] )
  request.r(i843[33], i843[34], 0, i842, 'trailMaterial')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i847 = data
  i846.cullTransparentMesh = !!i847[0]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i849 = data
  i848.enabled = !!i849[0]
  request.r(i849[1], i849[2], 0, i848, 'sharedMaterial')
  var i851 = i849[3]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[4]
  i848.shadowCastingMode = i849[5]
  i848.sortingLayerID = i849[6]
  i848.sortingOrder = i849[7]
  i848.lightmapIndex = i849[8]
  i848.lightmapSceneIndex = i849[9]
  i848.lightmapScaleOffset = new pc.Vec4( i849[10], i849[11], i849[12], i849[13] )
  i848.lightProbeUsage = i849[14]
  i848.reflectionProbeUsage = i849[15]
  i848.color = new pc.Color(i849[16], i849[17], i849[18], i849[19])
  request.r(i849[20], i849[21], 0, i848, 'sprite')
  i848.flipX = !!i849[22]
  i848.flipY = !!i849[23]
  i848.drawMode = i849[24]
  i848.size = new pc.Vec2( i849[25], i849[26] )
  i848.tileMode = i849[27]
  i848.adaptiveModeThreshold = i849[28]
  i848.maskInteraction = i849[29]
  i848.spriteSortPoint = i849[30]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i853 = data
  i852.m_Alpha = i853[0]
  i852.m_Interactable = !!i853[1]
  i852.m_BlocksRaycasts = !!i853[2]
  i852.m_IgnoreParentGroups = !!i853[3]
  i852.enabled = !!i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i855 = data
  i854.name = i855[0]
  i854.atlasId = i855[1]
  i854.mipmapCount = i855[2]
  i854.hdr = !!i855[3]
  i854.size = i855[4]
  i854.anisoLevel = i855[5]
  i854.filterMode = i855[6]
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 4) {
    i856.push( UnityEngine.Rect.MinMaxRect(i857[i + 0], i857[i + 1], i857[i + 2], i857[i + 3]) );
  }
  i854.rects = i856
  i854.wrapU = i855[8]
  i854.wrapV = i855[9]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i861 = data
  i860.name = i861[0]
  i860.index = i861[1]
  i860.startup = !!i861[2]
  return i860
}

Deserializers["GameManager"] = function (request, data, root) {
  var i862 = root || request.c( 'GameManager' )
  var i863 = data
  i862.idleTimeThreshold = i863[0]
  return i862
}

Deserializers["GridManager"] = function (request, data, root) {
  var i864 = root || request.c( 'GridManager' )
  var i865 = data
  i864.verticalOffset = i865[0]
  i864.seed = i865[1]
  request.r(i865[2], i865[3], 0, i864, 'prefabsParent')
  request.r(i865[4], i865[5], 0, i864, 'rowParentPrefab')
  request.r(i865[6], i865[7], 0, i864, 'slotPrefab')
  request.r(i865[8], i865[9], 0, i864, 'stuffPrefab')
  i864.slotScale = i865[10]
  i864.stuffScale = i865[11]
  i864.slotWidth = i865[12]
  i864.slotHeight = i865[13]
  var i867 = i865[14]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('RowData', i867[i + 0]) );
  }
  i864.levelData = i866
  i864.rowMoveDownDuration = i865[15]
  return i864
}

Deserializers["RowData"] = function (request, data, root) {
  var i870 = root || request.c( 'RowData' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'material')
  i870.wrongStuffCount = i871[2]
  return i870
}

Deserializers["DragAndDropManager"] = function (request, data, root) {
  var i872 = root || request.c( 'DragAndDropManager' )
  var i873 = data
  i872.dragZOffset = i873[0]
  i872.slotLayer = UnityEngine.LayerMask.FromIntegerValue( i873[1] )
  return i872
}

Deserializers["UIManager"] = function (request, data, root) {
  var i874 = root || request.c( 'UIManager' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'textBackGroundObject')
  request.r(i875[2], i875[3], 0, i874, 'idlePromptText')
  i874.startY = i875[4]
  i874.endY = i875[5]
  i874.moveDuration = i875[6]
  return i874
}

Deserializers["EffectsManager"] = function (request, data, root) {
  var i876 = root || request.c( 'EffectsManager' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'rowClearParticlePrefab')
  request.r(i877[2], i877[3], 0, i876, 'goodTextPrefab')
  i876.poolSize = i877[4]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.aspect = i879[1]
  i878.orthographic = !!i879[2]
  i878.orthographicSize = i879[3]
  i878.backgroundColor = new pc.Color(i879[4], i879[5], i879[6], i879[7])
  i878.nearClipPlane = i879[8]
  i878.farClipPlane = i879[9]
  i878.fieldOfView = i879[10]
  i878.depth = i879[11]
  i878.clearFlags = i879[12]
  i878.cullingMask = i879[13]
  i878.rect = i879[14]
  request.r(i879[15], i879[16], 0, i878, 'targetTexture')
  i878.usePhysicalProperties = !!i879[17]
  i878.focalLength = i879[18]
  i878.sensorSize = new pc.Vec2( i879[19], i879[20] )
  i878.lensShift = new pc.Vec2( i879[21], i879[22] )
  i878.gateFit = i879[23]
  i878.commandBufferCount = i879[24]
  i878.cameraType = i879[25]
  return i878
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i881 = data
  i880.m_RenderShadows = !!i881[0]
  i880.m_RequiresDepthTextureOption = i881[1]
  i880.m_RequiresOpaqueTextureOption = i881[2]
  i880.m_CameraType = i881[3]
  var i883 = i881[4]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i880.m_Cameras = i882
  i880.m_RendererIndex = i881[5]
  i880.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i881[6] )
  request.r(i881[7], i881[8], 0, i880, 'm_VolumeTrigger')
  i880.m_VolumeFrameworkUpdateModeOption = i881[9]
  i880.m_RenderPostProcessing = !!i881[10]
  i880.m_Antialiasing = i881[11]
  i880.m_AntialiasingQuality = i881[12]
  i880.m_StopNaN = !!i881[13]
  i880.m_Dithering = !!i881[14]
  i880.m_ClearDepth = !!i881[15]
  i880.m_AllowXRRendering = !!i881[16]
  i880.m_AllowHDROutput = !!i881[17]
  i880.m_UseScreenCoordOverride = !!i881[18]
  i880.m_ScreenSizeOverride = new pc.Vec4( i881[19], i881[20], i881[21], i881[22] )
  i880.m_ScreenCoordScaleBias = new pc.Vec4( i881[23], i881[24], i881[25], i881[26] )
  i880.m_RequiresDepthTexture = !!i881[27]
  i880.m_RequiresColorTexture = !!i881[28]
  i880.m_Version = i881[29]
  i880.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i881[30], i880.m_TaaSettings)
  return i880
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i887 = data
  i886.m_Quality = i887[0]
  i886.m_FrameInfluence = i887[1]
  i886.m_JitterScale = i887[2]
  i886.m_MipBias = i887[3]
  i886.m_VarianceClampScale = i887[4]
  i886.m_ContrastAdaptiveSharpening = i887[5]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i889 = data
  i888.enabled = !!i889[0]
  i888.type = i889[1]
  i888.color = new pc.Color(i889[2], i889[3], i889[4], i889[5])
  i888.cullingMask = i889[6]
  i888.intensity = i889[7]
  i888.range = i889[8]
  i888.spotAngle = i889[9]
  i888.shadows = i889[10]
  i888.shadowNormalBias = i889[11]
  i888.shadowBias = i889[12]
  i888.shadowStrength = i889[13]
  i888.shadowResolution = i889[14]
  i888.lightmapBakeType = i889[15]
  i888.renderMode = i889[16]
  request.r(i889[17], i889[18], 0, i888, 'cookie')
  i888.cookieSize = i889[19]
  return i888
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i891 = data
  i890.m_Version = i891[0]
  i890.m_UsePipelineSettings = !!i891[1]
  i890.m_AdditionalLightsShadowResolutionTier = i891[2]
  i890.m_LightLayerMask = i891[3]
  i890.m_RenderingLayers = i891[4]
  i890.m_CustomShadowLayers = !!i891[5]
  i890.m_ShadowLayerMask = i891[6]
  i890.m_ShadowRenderingLayers = i891[7]
  i890.m_LightCookieSize = new pc.Vec2( i891[8], i891[9] )
  i890.m_LightCookieOffset = new pc.Vec2( i891[10], i891[11] )
  i890.m_SoftShadowQuality = i891[12]
  return i890
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i893 = data
  i892.priority = i893[0]
  i892.blendDistance = i893[1]
  i892.weight = i893[2]
  request.r(i893[3], i893[4], 0, i892, 'sharedProfile')
  i892.m_IsGlobal = !!i893[5]
  return i892
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_FirstSelected')
  i894.m_sendNavigationEvents = !!i895[2]
  i894.m_DragThreshold = i895[3]
  return i894
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i897 = data
  i896.m_HorizontalAxis = i897[0]
  i896.m_VerticalAxis = i897[1]
  i896.m_SubmitButton = i897[2]
  i896.m_CancelButton = i897[3]
  i896.m_InputActionsPerSecond = i897[4]
  i896.m_RepeatDelay = i897[5]
  i896.m_ForceModuleActive = !!i897[6]
  i896.m_SendPointerHoverToParent = !!i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i899 = data
  i898.enabled = !!i899[0]
  i898.planeDistance = i899[1]
  i898.referencePixelsPerUnit = i899[2]
  i898.isFallbackOverlay = !!i899[3]
  i898.renderMode = i899[4]
  i898.renderOrder = i899[5]
  i898.sortingLayerName = i899[6]
  i898.sortingOrder = i899[7]
  i898.scaleFactor = i899[8]
  request.r(i899[9], i899[10], 0, i898, 'worldCamera')
  i898.overrideSorting = !!i899[11]
  i898.pixelPerfect = !!i899[12]
  i898.targetDisplay = i899[13]
  i898.overridePixelPerfect = !!i899[14]
  return i898
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i901 = data
  i900.m_UiScaleMode = i901[0]
  i900.m_ReferencePixelsPerUnit = i901[1]
  i900.m_ScaleFactor = i901[2]
  i900.m_ReferenceResolution = new pc.Vec2( i901[3], i901[4] )
  i900.m_ScreenMatchMode = i901[5]
  i900.m_MatchWidthOrHeight = i901[6]
  i900.m_PhysicalUnit = i901[7]
  i900.m_FallbackScreenDPI = i901[8]
  i900.m_DefaultSpriteDPI = i901[9]
  i900.m_DynamicPixelsPerUnit = i901[10]
  i900.m_PresetInfoIsWorld = !!i901[11]
  return i900
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i903 = data
  i902.m_IgnoreReversedGraphics = !!i903[0]
  i902.m_BlockingObjects = i903[1]
  i902.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i903[2] )
  return i902
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'm_Texture')
  i904.m_UVRect = UnityEngine.Rect.MinMaxRect(i905[2], i905[3], i905[4], i905[5])
  request.r(i905[6], i905[7], 0, i904, 'm_Material')
  i904.m_Maskable = !!i905[8]
  i904.m_Color = new pc.Color(i905[9], i905[10], i905[11], i905[12])
  i904.m_RaycastTarget = !!i905[13]
  i904.m_RaycastPadding = new pc.Vec4( i905[14], i905[15], i905[16], i905[17] )
  return i904
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i907 = data
  i906.m_hasFontAssetChanged = !!i907[0]
  request.r(i907[1], i907[2], 0, i906, 'm_baseMaterial')
  i906.m_maskOffset = new pc.Vec4( i907[3], i907[4], i907[5], i907[6] )
  i906.m_text = i907[7]
  i906.m_isRightToLeft = !!i907[8]
  request.r(i907[9], i907[10], 0, i906, 'm_fontAsset')
  request.r(i907[11], i907[12], 0, i906, 'm_sharedMaterial')
  var i909 = i907[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.m_fontSharedMaterials = i908
  request.r(i907[14], i907[15], 0, i906, 'm_fontMaterial')
  var i911 = i907[16]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i906.m_fontMaterials = i910
  i906.m_fontColor32 = UnityEngine.Color32.ConstructColor(i907[17], i907[18], i907[19], i907[20])
  i906.m_fontColor = new pc.Color(i907[21], i907[22], i907[23], i907[24])
  i906.m_enableVertexGradient = !!i907[25]
  i906.m_colorMode = i907[26]
  i906.m_fontColorGradient = request.d('TMPro.VertexGradient', i907[27], i906.m_fontColorGradient)
  request.r(i907[28], i907[29], 0, i906, 'm_fontColorGradientPreset')
  request.r(i907[30], i907[31], 0, i906, 'm_spriteAsset')
  i906.m_tintAllSprites = !!i907[32]
  request.r(i907[33], i907[34], 0, i906, 'm_StyleSheet')
  i906.m_TextStyleHashCode = i907[35]
  i906.m_overrideHtmlColors = !!i907[36]
  i906.m_faceColor = UnityEngine.Color32.ConstructColor(i907[37], i907[38], i907[39], i907[40])
  i906.m_fontSize = i907[41]
  i906.m_fontSizeBase = i907[42]
  i906.m_fontWeight = i907[43]
  i906.m_enableAutoSizing = !!i907[44]
  i906.m_fontSizeMin = i907[45]
  i906.m_fontSizeMax = i907[46]
  i906.m_fontStyle = i907[47]
  i906.m_HorizontalAlignment = i907[48]
  i906.m_VerticalAlignment = i907[49]
  i906.m_textAlignment = i907[50]
  i906.m_characterSpacing = i907[51]
  i906.m_wordSpacing = i907[52]
  i906.m_lineSpacing = i907[53]
  i906.m_lineSpacingMax = i907[54]
  i906.m_paragraphSpacing = i907[55]
  i906.m_charWidthMaxAdj = i907[56]
  i906.m_enableWordWrapping = !!i907[57]
  i906.m_wordWrappingRatios = i907[58]
  i906.m_overflowMode = i907[59]
  request.r(i907[60], i907[61], 0, i906, 'm_linkedTextComponent')
  request.r(i907[62], i907[63], 0, i906, 'parentLinkedComponent')
  i906.m_enableKerning = !!i907[64]
  i906.m_enableExtraPadding = !!i907[65]
  i906.checkPaddingRequired = !!i907[66]
  i906.m_isRichText = !!i907[67]
  i906.m_parseCtrlCharacters = !!i907[68]
  i906.m_isOrthographic = !!i907[69]
  i906.m_isCullingEnabled = !!i907[70]
  i906.m_horizontalMapping = i907[71]
  i906.m_verticalMapping = i907[72]
  i906.m_uvLineOffset = i907[73]
  i906.m_geometrySortingOrder = i907[74]
  i906.m_IsTextObjectScaleStatic = !!i907[75]
  i906.m_VertexBufferAutoSizeReduction = !!i907[76]
  i906.m_useMaxVisibleDescender = !!i907[77]
  i906.m_pageToDisplay = i907[78]
  i906.m_margin = new pc.Vec4( i907[79], i907[80], i907[81], i907[82] )
  i906.m_isUsingLegacyAnimationComponent = !!i907[83]
  i906.m_isVolumetricText = !!i907[84]
  request.r(i907[85], i907[86], 0, i906, 'm_Material')
  i906.m_Maskable = !!i907[87]
  i906.m_Color = new pc.Color(i907[88], i907[89], i907[90], i907[91])
  i906.m_RaycastTarget = !!i907[92]
  i906.m_RaycastPadding = new pc.Vec4( i907[93], i907[94], i907[95], i907[96] )
  return i906
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.VertexGradient' )
  var i913 = data
  i912.topLeft = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.topRight = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.bottomLeft = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.bottomRight = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i915 = data
  i914.ambientIntensity = i915[0]
  i914.reflectionIntensity = i915[1]
  i914.ambientMode = i915[2]
  i914.ambientLight = new pc.Color(i915[3], i915[4], i915[5], i915[6])
  i914.ambientSkyColor = new pc.Color(i915[7], i915[8], i915[9], i915[10])
  i914.ambientGroundColor = new pc.Color(i915[11], i915[12], i915[13], i915[14])
  i914.ambientEquatorColor = new pc.Color(i915[15], i915[16], i915[17], i915[18])
  i914.fogColor = new pc.Color(i915[19], i915[20], i915[21], i915[22])
  i914.fogEndDistance = i915[23]
  i914.fogStartDistance = i915[24]
  i914.fogDensity = i915[25]
  i914.fog = !!i915[26]
  request.r(i915[27], i915[28], 0, i914, 'skybox')
  i914.fogMode = i915[29]
  var i917 = i915[30]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i917[i + 0]) );
  }
  i914.lightmaps = i916
  i914.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i915[31], i914.lightProbes)
  i914.lightmapsMode = i915[32]
  i914.mixedBakeMode = i915[33]
  i914.environmentLightingMode = i915[34]
  i914.ambientProbe = new pc.SphericalHarmonicsL2(i915[35])
  i914.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i915[36])
  i914.useReferenceAmbientProbe = !!i915[37]
  request.r(i915[38], i915[39], 0, i914, 'customReflection')
  request.r(i915[40], i915[41], 0, i914, 'defaultReflection')
  i914.defaultReflectionMode = i915[42]
  i914.defaultReflectionResolution = i915[43]
  i914.sunLightObjectId = i915[44]
  i914.pixelLightCount = i915[45]
  i914.defaultReflectionHDR = !!i915[46]
  i914.hasLightDataAsset = !!i915[47]
  i914.hasManualGenerate = !!i915[48]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'lightmapColor')
  request.r(i921[2], i921[3], 0, i920, 'lightmapDirection')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i922 = root || new UnityEngine.LightProbes()
  var i923 = data
  return i922
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'panelPrefab')
  var i933 = i931[2]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i933[i + 0]));
  }
  i930.prefabs = i932
  return i930
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i937 = data
  i936.type = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'prefab')
  return i936
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Image' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_Sprite')
  i938.m_Type = i939[2]
  i938.m_PreserveAspect = !!i939[3]
  i938.m_FillCenter = !!i939[4]
  i938.m_FillMethod = i939[5]
  i938.m_FillAmount = i939[6]
  i938.m_FillClockwise = !!i939[7]
  i938.m_FillOrigin = i939[8]
  i938.m_UseSpriteMesh = !!i939[9]
  i938.m_PixelsPerUnitMultiplier = i939[10]
  request.r(i939[11], i939[12], 0, i938, 'm_Material')
  i938.m_Maskable = !!i939[13]
  i938.m_Color = new pc.Color(i939[14], i939[15], i939[16], i939[17])
  i938.m_RaycastTarget = !!i939[18]
  i938.m_RaycastPadding = new pc.Vec4( i939[19], i939[20], i939[21], i939[22] )
  return i938
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i941 = data
  i940.m_Spacing = i941[0]
  i940.m_ChildForceExpandWidth = !!i941[1]
  i940.m_ChildForceExpandHeight = !!i941[2]
  i940.m_ChildControlWidth = !!i941[3]
  i940.m_ChildControlHeight = !!i941[4]
  i940.m_ChildScaleWidth = !!i941[5]
  i940.m_ChildScaleHeight = !!i941[6]
  i940.m_ReverseArrangement = !!i941[7]
  i940.m_Padding = UnityEngine.RectOffset.FromPaddings(i941[8], i941[9], i941[10], i941[11])
  i940.m_ChildAlignment = i941[12]
  return i940
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i943 = data
  i942.m_HorizontalFit = i943[0]
  i942.m_VerticalFit = i943[1]
  return i942
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'contentHolder')
  return i944
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'nameLabel')
  request.r(i947[2], i947[3], 0, i946, 'scrollRect')
  request.r(i947[4], i947[5], 0, i946, 'viewport')
  request.r(i947[6], i947[7], 0, i946, 'Canvas')
  return i946
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i949 = data
  i948.m_IgnoreLayout = !!i949[0]
  i948.m_MinWidth = i949[1]
  i948.m_MinHeight = i949[2]
  i948.m_PreferredWidth = i949[3]
  i948.m_PreferredHeight = i949[4]
  i948.m_FlexibleWidth = i949[5]
  i948.m_FlexibleHeight = i949[6]
  i948.m_LayoutPriority = i949[7]
  return i948
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button' )
  var i951 = data
  i950.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i951[0], i950.m_OnClick)
  i950.m_Navigation = request.d('UnityEngine.UI.Navigation', i951[1], i950.m_Navigation)
  i950.m_Transition = i951[2]
  i950.m_Colors = request.d('UnityEngine.UI.ColorBlock', i951[3], i950.m_Colors)
  i950.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i951[4], i950.m_SpriteState)
  i950.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i951[5], i950.m_AnimationTriggers)
  i950.m_Interactable = !!i951[6]
  request.r(i951[7], i951[8], 0, i950, 'm_TargetGraphic')
  return i950
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i953 = data
  i952.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i953[0], i952.m_PersistentCalls)
  return i952
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.Events.PersistentCall', i957[i + 0]));
  }
  i954.m_Calls = i956
  return i954
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_Target')
  i960.m_TargetAssemblyTypeName = i961[2]
  i960.m_MethodName = i961[3]
  i960.m_Mode = i961[4]
  i960.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i961[5], i960.m_Arguments)
  i960.m_CallState = i961[6]
  return i960
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_ObjectArgument')
  i962.m_ObjectArgumentAssemblyTypeName = i963[2]
  i962.m_IntArgument = i963[3]
  i962.m_FloatArgument = i963[4]
  i962.m_StringArgument = i963[5]
  i962.m_BoolArgument = !!i963[6]
  return i962
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i965 = data
  i964.m_Mode = i965[0]
  i964.m_WrapAround = !!i965[1]
  request.r(i965[2], i965[3], 0, i964, 'm_SelectOnUp')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectOnDown')
  request.r(i965[6], i965[7], 0, i964, 'm_SelectOnLeft')
  request.r(i965[8], i965[9], 0, i964, 'm_SelectOnRight')
  return i964
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i967 = data
  i966.m_NormalColor = new pc.Color(i967[0], i967[1], i967[2], i967[3])
  i966.m_HighlightedColor = new pc.Color(i967[4], i967[5], i967[6], i967[7])
  i966.m_PressedColor = new pc.Color(i967[8], i967[9], i967[10], i967[11])
  i966.m_SelectedColor = new pc.Color(i967[12], i967[13], i967[14], i967[15])
  i966.m_DisabledColor = new pc.Color(i967[16], i967[17], i967[18], i967[19])
  i966.m_ColorMultiplier = i967[20]
  i966.m_FadeDuration = i967[21]
  return i966
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_HighlightedSprite')
  request.r(i969[2], i969[3], 0, i968, 'm_PressedSprite')
  request.r(i969[4], i969[5], 0, i968, 'm_SelectedSprite')
  request.r(i969[6], i969[7], 0, i968, 'm_DisabledSprite')
  return i968
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i971 = data
  i970.m_NormalTrigger = i971[0]
  i970.m_HighlightedTrigger = i971[1]
  i970.m_PressedTrigger = i971[2]
  i970.m_SelectedTrigger = i971[3]
  i970.m_DisabledTrigger = i971[4]
  return i970
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.Text' )
  var i973 = data
  i972.m_FontData = request.d('UnityEngine.UI.FontData', i973[0], i972.m_FontData)
  i972.m_Text = i973[1]
  request.r(i973[2], i973[3], 0, i972, 'm_Material')
  i972.m_Maskable = !!i973[4]
  i972.m_Color = new pc.Color(i973[5], i973[6], i973[7], i973[8])
  i972.m_RaycastTarget = !!i973[9]
  i972.m_RaycastPadding = new pc.Vec4( i973[10], i973[11], i973[12], i973[13] )
  return i972
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.FontData' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_Font')
  i974.m_FontSize = i975[2]
  i974.m_FontStyle = i975[3]
  i974.m_BestFit = !!i975[4]
  i974.m_MinSize = i975[5]
  i974.m_MaxSize = i975[6]
  i974.m_Alignment = i975[7]
  i974.m_AlignByGeometry = !!i975[8]
  i974.m_RichText = !!i975[9]
  i974.m_HorizontalOverflow = i975[10]
  i974.m_VerticalOverflow = i975[11]
  i974.m_LineSpacing = i975[12]
  return i974
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_Content')
  i976.m_Horizontal = !!i977[2]
  i976.m_Vertical = !!i977[3]
  i976.m_MovementType = i977[4]
  i976.m_Elasticity = i977[5]
  i976.m_Inertia = !!i977[6]
  i976.m_DecelerationRate = i977[7]
  i976.m_ScrollSensitivity = i977[8]
  request.r(i977[9], i977[10], 0, i976, 'm_Viewport')
  request.r(i977[11], i977[12], 0, i976, 'm_HorizontalScrollbar')
  request.r(i977[13], i977[14], 0, i976, 'm_VerticalScrollbar')
  i976.m_HorizontalScrollbarVisibility = i977[15]
  i976.m_VerticalScrollbarVisibility = i977[16]
  i976.m_HorizontalScrollbarSpacing = i977[17]
  i976.m_VerticalScrollbarSpacing = i977[18]
  i976.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i977[19], i976.m_OnValueChanged)
  return i976
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i979 = data
  i978.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i979[0], i978.m_PersistentCalls)
  return i978
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.Mask' )
  var i981 = data
  i980.m_ShowMaskGraphic = !!i981[0]
  return i980
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_HandleRect')
  i982.m_Direction = i983[2]
  i982.m_Value = i983[3]
  i982.m_Size = i983[4]
  i982.m_NumberOfSteps = i983[5]
  i982.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i983[6], i982.m_OnValueChanged)
  i982.m_Navigation = request.d('UnityEngine.UI.Navigation', i983[7], i982.m_Navigation)
  i982.m_Transition = i983[8]
  i982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i983[9], i982.m_Colors)
  i982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i983[10], i982.m_SpriteState)
  i982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i983[11], i982.m_AnimationTriggers)
  i982.m_Interactable = !!i983[12]
  request.r(i983[13], i983[14], 0, i982, 'm_TargetGraphic')
  return i982
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i985 = data
  i984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i985[0], i984.m_PersistentCalls)
  return i984
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i989[i + 0]));
  }
  i986.m_Delegates = i988
  return i986
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i993 = data
  i992.eventID = i993[0]
  i992.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i993[1], i992.callback)
  return i992
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i995 = data
  i994.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i995[0], i994.m_PersistentCalls)
  return i994
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'nameLabel')
  request.r(i997[2], i997[3], 0, i996, 'valueLabel')
  i996.colorDefault = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  i996.colorSelected = new pc.Color(i997[8], i997[9], i997[10], i997[11])
  return i996
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'nameLabel')
  request.r(i999[2], i999[3], 0, i998, 'valueToggle')
  request.r(i999[4], i999[5], 0, i998, 'checkmarkImage')
  i998.colorDefault = new pc.Color(i999[6], i999[7], i999[8], i999[9])
  i998.colorSelected = new pc.Color(i999[10], i999[11], i999[12], i999[13])
  return i998
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1001 = data
  i1000.toggleTransition = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'graphic')
  i1000.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1001[3], i1000.onValueChanged)
  request.r(i1001[4], i1001[5], 0, i1000, 'm_Group')
  i1000.m_IsOn = !!i1001[6]
  i1000.m_Navigation = request.d('UnityEngine.UI.Navigation', i1001[7], i1000.m_Navigation)
  i1000.m_Transition = i1001[8]
  i1000.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1001[9], i1000.m_Colors)
  i1000.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1001[10], i1000.m_SpriteState)
  i1000.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1001[11], i1000.m_AnimationTriggers)
  i1000.m_Interactable = !!i1001[12]
  request.r(i1001[13], i1001[14], 0, i1000, 'm_TargetGraphic')
  return i1000
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1003 = data
  i1002.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1003[0], i1002.m_PersistentCalls)
  return i1002
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'nameLabel')
  request.r(i1005[2], i1005[3], 0, i1004, 'valueLabel')
  i1004.colorDefault = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.colorSelected = new pc.Color(i1005[8], i1005[9], i1005[10], i1005[11])
  return i1004
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'nameLabel')
  request.r(i1007[2], i1007[3], 0, i1006, 'valueLabel')
  i1006.colorDefault = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.colorSelected = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  return i1006
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'nameLabel')
  request.r(i1009[2], i1009[3], 0, i1008, 'valueLabel')
  i1008.colorDefault = new pc.Color(i1009[4], i1009[5], i1009[6], i1009[7])
  i1008.colorSelected = new pc.Color(i1009[8], i1009[9], i1009[10], i1009[11])
  return i1008
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'nextButtonText')
  request.r(i1011[2], i1011[3], 0, i1010, 'previousButtonText')
  request.r(i1011[4], i1011[5], 0, i1010, 'nameLabel')
  request.r(i1011[6], i1011[7], 0, i1010, 'valueLabel')
  i1010.colorDefault = new pc.Color(i1011[8], i1011[9], i1011[10], i1011[11])
  i1010.colorSelected = new pc.Color(i1011[12], i1011[13], i1011[14], i1011[15])
  return i1010
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'nameLabel')
  i1012.colorDefault = new pc.Color(i1013[2], i1013[3], i1013[4], i1013[5])
  i1012.colorSelected = new pc.Color(i1013[6], i1013[7], i1013[8], i1013[9])
  return i1012
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'nameLabel')
  request.r(i1015[2], i1015[3], 0, i1014, 'valueToggle')
  i1014.colorDefault = new pc.Color(i1015[4], i1015[5], i1015[6], i1015[7])
  i1014.colorSelected = new pc.Color(i1015[8], i1015[9], i1015[10], i1015[11])
  return i1014
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1017 = data
  i1016.toggleTransition = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'graphic')
  i1016.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1017[3], i1016.onValueChanged)
  request.r(i1017[4], i1017[5], 0, i1016, 'content')
  request.r(i1017[6], i1017[7], 0, i1016, 'arrowOpened')
  request.r(i1017[8], i1017[9], 0, i1016, 'arrowClosed')
  request.r(i1017[10], i1017[11], 0, i1016, 'm_Group')
  i1016.m_IsOn = !!i1017[12]
  i1016.m_Navigation = request.d('UnityEngine.UI.Navigation', i1017[13], i1016.m_Navigation)
  i1016.m_Transition = i1017[14]
  i1016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1017[15], i1016.m_Colors)
  i1016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1017[16], i1016.m_SpriteState)
  i1016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1017[17], i1016.m_AnimationTriggers)
  i1016.m_Interactable = !!i1017[18]
  request.r(i1017[19], i1017[20], 0, i1016, 'm_TargetGraphic')
  return i1016
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'nameLabel')
  request.r(i1019[2], i1019[3], 0, i1018, 'valueToggle')
  request.r(i1019[4], i1019[5], 0, i1018, 'colorImage')
  request.r(i1019[6], i1019[7], 0, i1018, 'fieldR')
  request.r(i1019[8], i1019[9], 0, i1018, 'fieldG')
  request.r(i1019[10], i1019[11], 0, i1018, 'fieldB')
  request.r(i1019[12], i1019[13], 0, i1018, 'fieldA')
  i1018.colorDefault = new pc.Color(i1019[14], i1019[15], i1019[16], i1019[17])
  i1018.colorSelected = new pc.Color(i1019[18], i1019[19], i1019[20], i1019[21])
  return i1018
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'nameLabel')
  request.r(i1021[2], i1021[3], 0, i1020, 'valueLabel')
  i1020.colorDefault = new pc.Color(i1021[4], i1021[5], i1021[6], i1021[7])
  i1020.colorSelected = new pc.Color(i1021[8], i1021[9], i1021[10], i1021[11])
  return i1020
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'nameLabel')
  request.r(i1023[2], i1023[3], 0, i1022, 'valueToggle')
  request.r(i1023[4], i1023[5], 0, i1022, 'fieldX')
  request.r(i1023[6], i1023[7], 0, i1022, 'fieldY')
  i1022.colorDefault = new pc.Color(i1023[8], i1023[9], i1023[10], i1023[11])
  i1022.colorSelected = new pc.Color(i1023[12], i1023[13], i1023[14], i1023[15])
  return i1022
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'nameLabel')
  request.r(i1025[2], i1025[3], 0, i1024, 'valueToggle')
  request.r(i1025[4], i1025[5], 0, i1024, 'fieldX')
  request.r(i1025[6], i1025[7], 0, i1024, 'fieldY')
  request.r(i1025[8], i1025[9], 0, i1024, 'fieldZ')
  i1024.colorDefault = new pc.Color(i1025[10], i1025[11], i1025[12], i1025[13])
  i1024.colorSelected = new pc.Color(i1025[14], i1025[15], i1025[16], i1025[17])
  return i1024
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'nameLabel')
  request.r(i1027[2], i1027[3], 0, i1026, 'valueToggle')
  request.r(i1027[4], i1027[5], 0, i1026, 'fieldX')
  request.r(i1027[6], i1027[7], 0, i1026, 'fieldY')
  request.r(i1027[8], i1027[9], 0, i1026, 'fieldZ')
  request.r(i1027[10], i1027[11], 0, i1026, 'fieldW')
  i1026.colorDefault = new pc.Color(i1027[12], i1027[13], i1027[14], i1027[15])
  i1026.colorSelected = new pc.Color(i1027[16], i1027[17], i1027[18], i1027[19])
  return i1026
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1029 = data
  i1028.colorDefault = new pc.Color(i1029[0], i1029[1], i1029[2], i1029[3])
  i1028.colorSelected = new pc.Color(i1029[4], i1029[5], i1029[6], i1029[7])
  return i1028
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1031 = data
  i1030.m_Spacing = i1031[0]
  i1030.m_ChildForceExpandWidth = !!i1031[1]
  i1030.m_ChildForceExpandHeight = !!i1031[2]
  i1030.m_ChildControlWidth = !!i1031[3]
  i1030.m_ChildControlHeight = !!i1031[4]
  i1030.m_ChildScaleWidth = !!i1031[5]
  i1030.m_ChildScaleHeight = !!i1031[6]
  i1030.m_ReverseArrangement = !!i1031[7]
  i1030.m_Padding = UnityEngine.RectOffset.FromPaddings(i1031[8], i1031[9], i1031[10], i1031[11])
  i1030.m_ChildAlignment = i1031[12]
  return i1030
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1033 = data
  i1032.colorDefault = new pc.Color(i1033[0], i1033[1], i1033[2], i1033[3])
  i1032.colorSelected = new pc.Color(i1033[4], i1033[5], i1033[6], i1033[7])
  return i1032
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'nameLabel')
  request.r(i1035[2], i1035[3], 0, i1034, 'header')
  i1034.colorDefault = new pc.Color(i1035[4], i1035[5], i1035[6], i1035[7])
  i1034.colorSelected = new pc.Color(i1035[8], i1035[9], i1035[10], i1035[11])
  return i1034
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'nameLabel')
  request.r(i1037[2], i1037[3], 0, i1036, 'valueToggle')
  var i1039 = i1037[4]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1036.toggles = i1038
  i1036.colorDefault = new pc.Color(i1037[5], i1037[6], i1037[7], i1037[8])
  i1036.colorSelected = new pc.Color(i1037[9], i1037[10], i1037[11], i1037[12])
  return i1036
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'nameLabel')
  request.r(i1043[2], i1043[3], 0, i1042, 'valueToggle')
  request.r(i1043[4], i1043[5], 0, i1042, 'checkmarkImage')
  i1042.colorDefault = new pc.Color(i1043[6], i1043[7], i1043[8], i1043[9])
  i1042.colorSelected = new pc.Color(i1043[10], i1043[11], i1043[12], i1043[13])
  return i1042
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'nameLabel')
  request.r(i1045[2], i1045[3], 0, i1044, 'valueToggle')
  request.r(i1045[4], i1045[5], 0, i1044, 'checkmarkImage')
  i1044.colorDefault = new pc.Color(i1045[6], i1045[7], i1045[8], i1045[9])
  i1044.colorSelected = new pc.Color(i1045[10], i1045[11], i1045[12], i1045[13])
  return i1044
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'nextButtonText')
  request.r(i1047[2], i1047[3], 0, i1046, 'previousButtonText')
  request.r(i1047[4], i1047[5], 0, i1046, 'nameLabel')
  request.r(i1047[6], i1047[7], 0, i1046, 'valueLabel')
  i1046.colorDefault = new pc.Color(i1047[8], i1047[9], i1047[10], i1047[11])
  i1046.colorSelected = new pc.Color(i1047[12], i1047[13], i1047[14], i1047[15])
  return i1046
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'nameLabel')
  request.r(i1049[2], i1049[3], 0, i1048, 'valueToggle')
  i1048.colorDefault = new pc.Color(i1049[4], i1049[5], i1049[6], i1049[7])
  i1048.colorSelected = new pc.Color(i1049[8], i1049[9], i1049[10], i1049[11])
  return i1048
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'nameLabel')
  i1050.colorDefault = new pc.Color(i1051[2], i1051[3], i1051[4], i1051[5])
  i1050.colorSelected = new pc.Color(i1051[6], i1051[7], i1051[8], i1051[9])
  return i1050
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'nameLabel')
  request.r(i1053[2], i1053[3], 0, i1052, 'valueLabel')
  request.r(i1053[4], i1053[5], 0, i1052, 'progressBarRect')
  i1052.colorDefault = new pc.Color(i1053[6], i1053[7], i1053[8], i1053[9])
  i1052.colorSelected = new pc.Color(i1053[10], i1053[11], i1053[12], i1053[13])
  return i1052
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'nameLabel')
  request.r(i1055[2], i1055[3], 0, i1054, 'valueLabel')
  i1054.colorDefault = new pc.Color(i1055[4], i1055[5], i1055[6], i1055[7])
  i1054.colorSelected = new pc.Color(i1055[8], i1055[9], i1055[10], i1055[11])
  return i1054
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'nameLabel')
  request.r(i1057[2], i1057[3], 0, i1056, 'valueLabel')
  i1056.colorDefault = new pc.Color(i1057[4], i1057[5], i1057[6], i1057[7])
  i1056.colorSelected = new pc.Color(i1057[8], i1057[9], i1057[10], i1057[11])
  return i1056
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'nextButtonText')
  request.r(i1059[2], i1059[3], 0, i1058, 'previousButtonText')
  request.r(i1059[4], i1059[5], 0, i1058, 'nameLabel')
  request.r(i1059[6], i1059[7], 0, i1058, 'valueLabel')
  i1058.colorDefault = new pc.Color(i1059[8], i1059[9], i1059[10], i1059[11])
  i1058.colorSelected = new pc.Color(i1059[12], i1059[13], i1059[14], i1059[15])
  return i1058
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'nextButtonText')
  request.r(i1061[2], i1061[3], 0, i1060, 'previousButtonText')
  request.r(i1061[4], i1061[5], 0, i1060, 'nameLabel')
  request.r(i1061[6], i1061[7], 0, i1060, 'valueLabel')
  i1060.colorDefault = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  i1060.colorSelected = new pc.Color(i1061[12], i1061[13], i1061[14], i1061[15])
  return i1060
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'panel')
  request.r(i1063[2], i1063[3], 0, i1062, 'valuePrefab')
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1065 = data
  i1064.AdditionalLightsPerObjectLimit = i1065[0]
  i1064.AdditionalLightsRenderingMode = i1065[1]
  i1064.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1065[2], i1064.LightRenderingMode)
  i1064.ColorGradingLutSize = i1065[3]
  i1064.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1065[4], i1064.ColorGradingMode)
  i1064.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1065[5], i1064.MainLightRenderingMode)
  i1064.MainLightRenderingModeValue = i1065[6]
  i1064.SupportsMainLightShadows = !!i1065[7]
  i1064.MixedLightingSupported = !!i1065[8]
  i1064.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1065[9], i1064.MsaaQuality)
  i1064.MSAA = i1065[10]
  i1064.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1065[11], i1064.OpaqueDownsampling)
  i1064.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1065[12], i1064.MainLightShadowmapResolution)
  i1064.MainLightShadowmapResolutionValue = i1065[13]
  i1064.SupportsSoftShadows = !!i1065[14]
  i1064.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1065[15], i1064.SoftShadowQuality)
  i1064.SoftShadowQualityValue = i1065[16]
  i1064.ShadowDistance = i1065[17]
  i1064.ShadowCascadeCount = i1065[18]
  i1064.Cascade2Split = i1065[19]
  i1064.Cascade3Split = new pc.Vec2( i1065[20], i1065[21] )
  i1064.Cascade4Split = new pc.Vec3( i1065[22], i1065[23], i1065[24] )
  i1064.CascadeBorder = i1065[25]
  i1064.ShadowDepthBias = i1065[26]
  i1064.ShadowNormalBias = i1065[27]
  i1064.RenderScale = i1065[28]
  i1064.RequireDepthTexture = !!i1065[29]
  i1064.RequireOpaqueTexture = !!i1065[30]
  i1064.SupportsHDR = !!i1065[31]
  i1064.SupportsTerrainHoles = !!i1065[32]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1067 = data
  i1066.Disabled = i1067[0]
  i1066.PerVertex = i1067[1]
  i1066.PerPixel = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1069 = data
  i1068.LowDynamicRange = i1069[0]
  i1068.HighDynamicRange = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1071 = data
  i1070.Disabled = i1071[0]
  i1070._2x = i1071[1]
  i1070._4x = i1071[2]
  i1070._8x = i1071[3]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1073 = data
  i1072.None = i1073[0]
  i1072._2xBilinear = i1073[1]
  i1072._4xBox = i1073[2]
  i1072._4xBilinear = i1073[3]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1075 = data
  i1074._256 = i1075[0]
  i1074._512 = i1075[1]
  i1074._1024 = i1075[2]
  i1074._2048 = i1075[3]
  i1074._4096 = i1075[4]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1077 = data
  i1076.UsePipelineSettings = i1077[0]
  i1076.Low = i1077[1]
  i1076.Medium = i1077[2]
  i1076.High = i1077[3]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1081[i + 0]));
  }
  i1078.ShaderCompilationErrors = i1080
  i1078.name = i1079[1]
  i1078.guid = i1079[2]
  var i1083 = i1079[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.shaderDefinedKeywords = i1082
  var i1085 = i1079[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1085[i + 0]) );
  }
  i1078.passes = i1084
  var i1087 = i1079[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1087[i + 0]) );
  }
  i1078.usePasses = i1086
  var i1089 = i1079[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1089[i + 0]) );
  }
  i1078.defaultParameterValues = i1088
  request.r(i1079[7], i1079[8], 0, i1078, 'unityFallbackShader')
  i1078.readDepth = !!i1079[9]
  i1078.isCreatedByShaderGraph = !!i1079[10]
  i1078.compiled = !!i1079[11]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1093 = data
  i1092.shaderName = i1093[0]
  i1092.errorMessage = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1098 = root || new pc.UnityShaderPass()
  var i1099 = data
  i1098.id = i1099[0]
  i1098.subShaderIndex = i1099[1]
  i1098.name = i1099[2]
  i1098.passType = i1099[3]
  i1098.grabPassTextureName = i1099[4]
  i1098.usePass = !!i1099[5]
  i1098.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[6], i1098.zTest)
  i1098.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[7], i1098.zWrite)
  i1098.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[8], i1098.culling)
  i1098.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1099[9], i1098.blending)
  i1098.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1099[10], i1098.alphaBlending)
  i1098.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[11], i1098.colorWriteMask)
  i1098.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[12], i1098.offsetUnits)
  i1098.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[13], i1098.offsetFactor)
  i1098.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[14], i1098.stencilRef)
  i1098.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[15], i1098.stencilReadMask)
  i1098.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[16], i1098.stencilWriteMask)
  i1098.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[17], i1098.stencilOp)
  i1098.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[18], i1098.stencilOpFront)
  i1098.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1099[19], i1098.stencilOpBack)
  var i1101 = i1099[20]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1101[i + 0]) );
  }
  i1098.tags = i1100
  var i1103 = i1099[21]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1098.passDefinedKeywords = i1102
  var i1105 = i1099[22]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1105[i + 0]) );
  }
  i1098.passDefinedKeywordGroups = i1104
  var i1107 = i1099[23]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1107[i + 0]) );
  }
  i1098.variants = i1106
  var i1109 = i1099[24]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1109[i + 0]) );
  }
  i1098.excludedVariants = i1108
  i1098.hasDepthReader = !!i1099[25]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1111 = data
  i1110.val = i1111[0]
  i1110.name = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1113 = data
  i1112.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[0], i1112.src)
  i1112.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[1], i1112.dst)
  i1112.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[2], i1112.op)
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1115 = data
  i1114.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[0], i1114.pass)
  i1114.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[1], i1114.fail)
  i1114.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[2], i1114.zFail)
  i1114.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[3], i1114.comp)
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.value = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1122.keywords = i1124
  i1122.hasDiscard = !!i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1129 = data
  i1128.passId = i1129[0]
  i1128.subShaderIndex = i1129[1]
  var i1131 = i1129[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1128.keywords = i1130
  i1128.vertexProgram = i1129[3]
  i1128.fragmentProgram = i1129[4]
  i1128.exportedForWebGl2 = !!i1129[5]
  i1128.readDepth = !!i1129[6]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'shader')
  i1134.pass = i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.type = i1139[1]
  i1138.value = new pc.Vec4( i1139[2], i1139[3], i1139[4], i1139[5] )
  i1138.textureValue = i1139[6]
  i1138.shaderPropertyFlag = i1139[7]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1141 = data
  i1140.name = i1141[0]
  request.r(i1141[1], i1141[2], 0, i1140, 'texture')
  i1140.aabb = i1141[3]
  i1140.vertices = i1141[4]
  i1140.triangles = i1141[5]
  i1140.textureRect = UnityEngine.Rect.MinMaxRect(i1141[6], i1141[7], i1141[8], i1141[9])
  i1140.packedRect = UnityEngine.Rect.MinMaxRect(i1141[10], i1141[11], i1141[12], i1141[13])
  i1140.border = new pc.Vec4( i1141[14], i1141[15], i1141[16], i1141[17] )
  i1140.transparency = i1141[18]
  i1140.bounds = i1141[19]
  i1140.pixelsPerUnit = i1141[20]
  i1140.textureWidth = i1141[21]
  i1140.textureHeight = i1141[22]
  i1140.nativeSize = new pc.Vec2( i1141[23], i1141[24] )
  i1140.pivot = new pc.Vec2( i1141[25], i1141[26] )
  i1140.textureRectOffset = new pc.Vec2( i1141[27], i1141[28] )
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.ascent = i1143[1]
  i1142.originalLineHeight = i1143[2]
  i1142.fontSize = i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1145[i + 0]) );
  }
  i1142.characterInfo = i1144
  request.r(i1143[5], i1143[6], 0, i1142, 'texture')
  i1142.originalFontSize = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1149 = data
  i1148.index = i1149[0]
  i1148.advance = i1149[1]
  i1148.bearing = i1149[2]
  i1148.glyphWidth = i1149[3]
  i1148.glyphHeight = i1149[4]
  i1148.minX = i1149[5]
  i1148.maxX = i1149[6]
  i1148.minY = i1149[7]
  i1148.maxY = i1149[8]
  i1148.uvBottomLeftX = i1149[9]
  i1148.uvBottomLeftY = i1149[10]
  i1148.uvBottomRightX = i1149[11]
  i1148.uvBottomRightY = i1149[12]
  i1148.uvTopLeftX = i1149[13]
  i1148.uvTopLeftY = i1149[14]
  i1148.uvTopRightX = i1149[15]
  i1148.uvTopRightY = i1149[16]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.bytes64 = i1151[1]
  i1150.data = i1151[2]
  return i1150
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1153 = data
  i1152.hashCode = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'material')
  i1152.materialHashCode = i1153[3]
  request.r(i1153[4], i1153[5], 0, i1152, 'atlas')
  i1152.normalStyle = i1153[6]
  i1152.normalSpacingOffset = i1153[7]
  i1152.boldStyle = i1153[8]
  i1152.boldSpacing = i1153[9]
  i1152.italicStyle = i1153[10]
  i1152.tabSize = i1153[11]
  i1152.m_Version = i1153[12]
  i1152.m_SourceFontFileGUID = i1153[13]
  request.r(i1153[14], i1153[15], 0, i1152, 'm_SourceFontFile_EditorRef')
  request.r(i1153[16], i1153[17], 0, i1152, 'm_SourceFontFile')
  i1152.m_AtlasPopulationMode = i1153[18]
  i1152.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1153[19], i1152.m_FaceInfo)
  var i1155 = i1153[20]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('UnityEngine.TextCore.Glyph', i1155[i + 0]));
  }
  i1152.m_GlyphTable = i1154
  var i1157 = i1153[21]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('TMPro.TMP_Character', i1157[i + 0]));
  }
  i1152.m_CharacterTable = i1156
  var i1159 = i1153[22]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1152.m_AtlasTextures = i1158
  i1152.m_AtlasTextureIndex = i1153[23]
  i1152.m_IsMultiAtlasTexturesEnabled = !!i1153[24]
  i1152.m_ClearDynamicDataOnBuild = !!i1153[25]
  var i1161 = i1153[26]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('UnityEngine.TextCore.GlyphRect', i1161[i + 0]));
  }
  i1152.m_UsedGlyphRects = i1160
  var i1163 = i1153[27]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('UnityEngine.TextCore.GlyphRect', i1163[i + 0]));
  }
  i1152.m_FreeGlyphRects = i1162
  i1152.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1153[28], i1152.m_fontInfo)
  i1152.m_AtlasWidth = i1153[29]
  i1152.m_AtlasHeight = i1153[30]
  i1152.m_AtlasPadding = i1153[31]
  i1152.m_AtlasRenderMode = i1153[32]
  var i1165 = i1153[33]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_Glyph', i1165[i + 0]));
  }
  i1152.m_glyphInfoList = i1164
  i1152.m_KerningTable = request.d('TMPro.KerningTable', i1153[34], i1152.m_KerningTable)
  i1152.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1153[35], i1152.m_FontFeatureTable)
  var i1167 = i1153[36]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1152.fallbackFontAssets = i1166
  var i1169 = i1153[37]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1152.m_FallbackFontAssetTable = i1168
  i1152.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1153[38], i1152.m_CreationSettings)
  var i1171 = i1153[39]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('TMPro.TMP_FontWeightPair', i1171[i + 0]) );
  }
  i1152.m_FontWeightTable = i1170
  var i1173 = i1153[40]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('TMPro.TMP_FontWeightPair', i1173[i + 0]) );
  }
  i1152.fontWeights = i1172
  return i1152
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1175 = data
  i1174.m_FaceIndex = i1175[0]
  i1174.m_FamilyName = i1175[1]
  i1174.m_StyleName = i1175[2]
  i1174.m_PointSize = i1175[3]
  i1174.m_Scale = i1175[4]
  i1174.m_UnitsPerEM = i1175[5]
  i1174.m_LineHeight = i1175[6]
  i1174.m_AscentLine = i1175[7]
  i1174.m_CapLine = i1175[8]
  i1174.m_MeanLine = i1175[9]
  i1174.m_Baseline = i1175[10]
  i1174.m_DescentLine = i1175[11]
  i1174.m_SuperscriptOffset = i1175[12]
  i1174.m_SuperscriptSize = i1175[13]
  i1174.m_SubscriptOffset = i1175[14]
  i1174.m_SubscriptSize = i1175[15]
  i1174.m_UnderlineOffset = i1175[16]
  i1174.m_UnderlineThickness = i1175[17]
  i1174.m_StrikethroughOffset = i1175[18]
  i1174.m_StrikethroughThickness = i1175[19]
  i1174.m_TabWidth = i1175[20]
  return i1174
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1179 = data
  i1178.m_Index = i1179[0]
  i1178.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1179[1], i1178.m_Metrics)
  i1178.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1179[2], i1178.m_GlyphRect)
  i1178.m_Scale = i1179[3]
  i1178.m_AtlasIndex = i1179[4]
  i1178.m_ClassDefinitionType = i1179[5]
  return i1178
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1181 = data
  i1180.m_Width = i1181[0]
  i1180.m_Height = i1181[1]
  i1180.m_HorizontalBearingX = i1181[2]
  i1180.m_HorizontalBearingY = i1181[3]
  i1180.m_HorizontalAdvance = i1181[4]
  return i1180
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1183 = data
  i1182.m_X = i1183[0]
  i1182.m_Y = i1183[1]
  i1182.m_Width = i1183[2]
  i1182.m_Height = i1183[3]
  return i1182
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Character' )
  var i1187 = data
  i1186.m_ElementType = i1187[0]
  i1186.m_Unicode = i1187[1]
  i1186.m_GlyphIndex = i1187[2]
  i1186.m_Scale = i1187[3]
  return i1186
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1193 = data
  i1192.Name = i1193[0]
  i1192.PointSize = i1193[1]
  i1192.Scale = i1193[2]
  i1192.CharacterCount = i1193[3]
  i1192.LineHeight = i1193[4]
  i1192.Baseline = i1193[5]
  i1192.Ascender = i1193[6]
  i1192.CapHeight = i1193[7]
  i1192.Descender = i1193[8]
  i1192.CenterLine = i1193[9]
  i1192.SuperscriptOffset = i1193[10]
  i1192.SubscriptOffset = i1193[11]
  i1192.SubSize = i1193[12]
  i1192.Underline = i1193[13]
  i1192.UnderlineThickness = i1193[14]
  i1192.strikethrough = i1193[15]
  i1192.strikethroughThickness = i1193[16]
  i1192.TabWidth = i1193[17]
  i1192.Padding = i1193[18]
  i1192.AtlasWidth = i1193[19]
  i1192.AtlasHeight = i1193[20]
  return i1192
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.x = i1197[1]
  i1196.y = i1197[2]
  i1196.width = i1197[3]
  i1196.height = i1197[4]
  i1196.xOffset = i1197[5]
  i1196.yOffset = i1197[6]
  i1196.xAdvance = i1197[7]
  i1196.scale = i1197[8]
  return i1196
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.KerningTable' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.KerningPair', i1201[i + 0]));
  }
  i1198.kerningPairs = i1200
  return i1198
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.KerningPair' )
  var i1205 = data
  i1204.xOffset = i1205[0]
  i1204.m_FirstGlyph = i1205[1]
  i1204.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1205[2], i1204.m_FirstGlyphAdjustments)
  i1204.m_SecondGlyph = i1205[3]
  i1204.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1205[4], i1204.m_SecondGlyphAdjustments)
  i1204.m_IgnoreSpacingAdjustments = !!i1205[5]
  return i1204
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1209[i + 0]));
  }
  i1206.m_GlyphPairAdjustmentRecords = i1208
  return i1206
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1213 = data
  i1212.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1213[0], i1212.m_FirstAdjustmentRecord)
  i1212.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1213[1], i1212.m_SecondAdjustmentRecord)
  i1212.m_FeatureLookupFlags = i1213[2]
  return i1212
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1215 = data
  i1214.m_GlyphIndex = i1215[0]
  i1214.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1215[1], i1214.m_GlyphValueRecord)
  return i1214
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1217 = data
  i1216.m_XPlacement = i1217[0]
  i1216.m_YPlacement = i1217[1]
  i1216.m_XAdvance = i1217[2]
  i1216.m_YAdvance = i1217[3]
  return i1216
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1221 = data
  i1220.sourceFontFileName = i1221[0]
  i1220.sourceFontFileGUID = i1221[1]
  i1220.pointSizeSamplingMode = i1221[2]
  i1220.pointSize = i1221[3]
  i1220.padding = i1221[4]
  i1220.packingMode = i1221[5]
  i1220.atlasWidth = i1221[6]
  i1220.atlasHeight = i1221[7]
  i1220.characterSetSelectionMode = i1221[8]
  i1220.characterSequence = i1221[9]
  i1220.referencedFontAssetGUID = i1221[10]
  i1220.referencedTextAssetGUID = i1221[11]
  i1220.fontStyle = i1221[12]
  i1220.fontStyleModifier = i1221[13]
  i1220.renderMode = i1221[14]
  i1220.includeFontFeatures = !!i1221[15]
  return i1220
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'regularTypeface')
  request.r(i1225[2], i1225[3], 0, i1224, 'italicTypeface')
  return i1224
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1226.components = i1228
  return i1226
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1233 = data
  i1232.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1233[0], i1232.mode)
  i1232.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1233[1], i1232.neutralHDRRangeReductionMode)
  i1232.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1233[2], i1232.acesPreset)
  i1232.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1233[3], i1232.hueShiftAmount)
  i1232.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1233[4], i1232.detectPaperWhite)
  i1232.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1233[5], i1232.paperWhite)
  i1232.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1233[6], i1232.detectBrightnessLimits)
  i1232.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1233[7], i1232.minNits)
  i1232.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1233[8], i1232.maxNits)
  i1232.active = !!i1233[9]
  return i1232
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1235 = data
  i1234.m_Value = i1235[0]
  i1234.m_OverrideState = !!i1235[1]
  return i1234
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1237 = data
  i1236.m_Value = i1237[0]
  i1236.m_OverrideState = !!i1237[1]
  return i1236
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1239 = data
  i1238.m_Value = i1239[0]
  i1238.m_OverrideState = !!i1239[1]
  return i1238
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1241 = data
  i1240.m_Value = i1241[0]
  i1240.m_OverrideState = !!i1241[1]
  return i1240
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1243 = data
  i1242.m_Value = !!i1243[0]
  i1242.m_OverrideState = !!i1243[1]
  return i1242
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1245 = data
  i1244.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1245[0], i1244.skipIterations)
  i1244.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1245[1], i1244.threshold)
  i1244.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1245[2], i1244.intensity)
  i1244.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1245[3], i1244.scatter)
  i1244.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1245[4], i1244.clamp)
  i1244.tint = request.d('UnityEngine.Rendering.ColorParameter', i1245[5], i1244.tint)
  i1244.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1245[6], i1244.highQualityFiltering)
  i1244.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1245[7], i1244.downscale)
  i1244.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1245[8], i1244.maxIterations)
  i1244.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1245[9], i1244.dirtTexture)
  i1244.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1245[10], i1244.dirtIntensity)
  i1244.active = !!i1245[11]
  return i1244
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1247 = data
  i1246.m_Value = i1247[0]
  i1246.m_OverrideState = !!i1247[1]
  return i1246
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1249 = data
  i1248.m_Value = i1249[0]
  i1248.m_OverrideState = !!i1249[1]
  return i1248
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1251 = data
  i1250.m_Value = new pc.Color(i1251[0], i1251[1], i1251[2], i1251[3])
  i1250.m_OverrideState = !!i1251[4]
  return i1250
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1253 = data
  i1252.m_Value = i1253[0]
  i1252.m_OverrideState = !!i1253[1]
  return i1252
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1255 = data
  i1254.dimension = i1255[0]
  request.r(i1255[1], i1255[2], 0, i1254, 'm_Value')
  i1254.m_OverrideState = !!i1255[3]
  return i1254
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1257 = data
  i1256.color = request.d('UnityEngine.Rendering.ColorParameter', i1257[0], i1256.color)
  i1256.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1257[1], i1256.center)
  i1256.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1257[2], i1256.intensity)
  i1256.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1257[3], i1256.smoothness)
  i1256.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1257[4], i1256.rounded)
  i1256.active = !!i1257[5]
  return i1256
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1259 = data
  i1258.m_Value = new pc.Vec2( i1259[0], i1259[1] )
  i1258.m_OverrideState = !!i1259[2]
  return i1258
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1261 = data
  i1260.useSafeMode = !!i1261[0]
  i1260.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1261[1], i1260.safeModeOptions)
  i1260.timeScale = i1261[2]
  i1260.unscaledTimeScale = i1261[3]
  i1260.useSmoothDeltaTime = !!i1261[4]
  i1260.maxSmoothUnscaledTime = i1261[5]
  i1260.rewindCallbackMode = i1261[6]
  i1260.showUnityEditorReport = !!i1261[7]
  i1260.logBehaviour = i1261[8]
  i1260.drawGizmos = !!i1261[9]
  i1260.defaultRecyclable = !!i1261[10]
  i1260.defaultAutoPlay = i1261[11]
  i1260.defaultUpdateType = i1261[12]
  i1260.defaultTimeScaleIndependent = !!i1261[13]
  i1260.defaultEaseType = i1261[14]
  i1260.defaultEaseOvershootOrAmplitude = i1261[15]
  i1260.defaultEasePeriod = i1261[16]
  i1260.defaultAutoKill = !!i1261[17]
  i1260.defaultLoopType = i1261[18]
  i1260.debugMode = !!i1261[19]
  i1260.debugStoreTargetId = !!i1261[20]
  i1260.showPreviewPanel = !!i1261[21]
  i1260.storeSettingsLocation = i1261[22]
  i1260.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1261[23], i1260.modules)
  i1260.createASMDEF = !!i1261[24]
  i1260.showPlayingTweens = !!i1261[25]
  i1260.showPausedTweens = !!i1261[26]
  return i1260
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1262 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1263 = data
  i1262.logBehaviour = i1263[0]
  i1262.nestedTweenFailureBehaviour = i1263[1]
  return i1262
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1264 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1265 = data
  i1264.showPanel = !!i1265[0]
  i1264.audioEnabled = !!i1265[1]
  i1264.physicsEnabled = !!i1265[2]
  i1264.physics2DEnabled = !!i1265[3]
  i1264.spriteEnabled = !!i1265[4]
  i1264.uiEnabled = !!i1265[5]
  i1264.textMeshProEnabled = !!i1265[6]
  i1264.tk2DEnabled = !!i1265[7]
  i1264.deAudioEnabled = !!i1265[8]
  i1264.deUnityExtendedEnabled = !!i1265[9]
  i1264.epoOutlineEnabled = !!i1265[10]
  return i1264
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Settings' )
  var i1267 = data
  i1266.m_enableWordWrapping = !!i1267[0]
  i1266.m_enableKerning = !!i1267[1]
  i1266.m_enableExtraPadding = !!i1267[2]
  i1266.m_enableTintAllSprites = !!i1267[3]
  i1266.m_enableParseEscapeCharacters = !!i1267[4]
  i1266.m_EnableRaycastTarget = !!i1267[5]
  i1266.m_GetFontFeaturesAtRuntime = !!i1267[6]
  i1266.m_missingGlyphCharacter = i1267[7]
  i1266.m_warningsDisabled = !!i1267[8]
  request.r(i1267[9], i1267[10], 0, i1266, 'm_defaultFontAsset')
  i1266.m_defaultFontAssetPath = i1267[11]
  i1266.m_defaultFontSize = i1267[12]
  i1266.m_defaultAutoSizeMinRatio = i1267[13]
  i1266.m_defaultAutoSizeMaxRatio = i1267[14]
  i1266.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1267[15], i1267[16] )
  i1266.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1267[17], i1267[18] )
  i1266.m_autoSizeTextContainer = !!i1267[19]
  i1266.m_IsTextObjectScaleStatic = !!i1267[20]
  var i1269 = i1267[21]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 1, i1268, '')
  }
  i1266.m_fallbackFontAssets = i1268
  i1266.m_matchMaterialPreset = !!i1267[22]
  request.r(i1267[23], i1267[24], 0, i1266, 'm_defaultSpriteAsset')
  i1266.m_defaultSpriteAssetPath = i1267[25]
  i1266.m_enableEmojiSupport = !!i1267[26]
  i1266.m_MissingCharacterSpriteUnicode = i1267[27]
  i1266.m_defaultColorGradientPresetsPath = i1267[28]
  request.r(i1267[29], i1267[30], 0, i1266, 'm_defaultStyleSheet')
  i1266.m_StyleSheetsResourcePath = i1267[31]
  request.r(i1267[32], i1267[33], 0, i1266, 'm_leadingCharacters')
  request.r(i1267[34], i1267[35], 0, i1266, 'm_followingCharacters')
  i1266.m_UseModernHangulLineBreakingRules = !!i1267[36]
  return i1266
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1271 = data
  i1270.hashCode = i1271[0]
  request.r(i1271[1], i1271[2], 0, i1270, 'material')
  i1270.materialHashCode = i1271[3]
  request.r(i1271[4], i1271[5], 0, i1270, 'spriteSheet')
  var i1273 = i1271[6]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.TMP_Sprite', i1273[i + 0]));
  }
  i1270.spriteInfoList = i1272
  var i1275 = i1271[7]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 1, i1274, '')
  }
  i1270.fallbackSpriteAssets = i1274
  i1270.m_Version = i1271[8]
  i1270.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1271[9], i1270.m_FaceInfo)
  var i1277 = i1271[10]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_SpriteCharacter', i1277[i + 0]));
  }
  i1270.m_SpriteCharacterTable = i1276
  var i1279 = i1271[11]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('TMPro.TMP_SpriteGlyph', i1279[i + 0]));
  }
  i1270.m_SpriteGlyphTable = i1278
  return i1270
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.hashCode = i1283[1]
  i1282.unicode = i1283[2]
  i1282.pivot = new pc.Vec2( i1283[3], i1283[4] )
  request.r(i1283[5], i1283[6], 0, i1282, 'sprite')
  i1282.id = i1283[7]
  i1282.x = i1283[8]
  i1282.y = i1283[9]
  i1282.width = i1283[10]
  i1282.height = i1283[11]
  i1282.xOffset = i1283[12]
  i1282.yOffset = i1283[13]
  i1282.xAdvance = i1283[14]
  i1282.scale = i1283[15]
  return i1282
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1289 = data
  i1288.m_Name = i1289[0]
  i1288.m_HashCode = i1289[1]
  i1288.m_ElementType = i1289[2]
  i1288.m_Unicode = i1289[3]
  i1288.m_GlyphIndex = i1289[4]
  i1288.m_Scale = i1289[5]
  return i1288
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'sprite')
  i1292.m_Index = i1293[2]
  i1292.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1293[3], i1292.m_Metrics)
  i1292.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1293[4], i1292.m_GlyphRect)
  i1292.m_Scale = i1293[5]
  i1292.m_AtlasIndex = i1293[6]
  i1292.m_ClassDefinitionType = i1293[7]
  return i1292
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.TMP_Style', i1297[i + 0]));
  }
  i1294.m_StyleList = i1296
  return i1294
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Style' )
  var i1301 = data
  i1300.m_Name = i1301[0]
  i1300.m_HashCode = i1301[1]
  i1300.m_OpeningDefinition = i1301[2]
  i1300.m_ClosingDefinition = i1301[3]
  i1300.m_OpeningTagArray = i1301[4]
  i1300.m_ClosingTagArray = i1301[5]
  i1300.m_OpeningTagUnicodeArray = i1301[6]
  i1300.m_ClosingTagUnicodeArray = i1301[7]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1305[i + 0]) );
  }
  i1302.files = i1304
  i1302.componentToPrefabIds = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1309 = data
  i1308.path = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'unityObject')
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1313[i + 0]) );
  }
  i1310.scriptsExecutionOrder = i1312
  var i1315 = i1311[1]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1315[i + 0]) );
  }
  i1310.sortingLayers = i1314
  var i1317 = i1311[2]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1317[i + 0]) );
  }
  i1310.cullingLayers = i1316
  i1310.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1311[3], i1310.timeSettings)
  i1310.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1311[4], i1310.physicsSettings)
  i1310.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1311[5], i1310.physics2DSettings)
  i1310.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1311[6], i1310.qualitySettings)
  i1310.enableRealtimeShadows = !!i1311[7]
  i1310.enableAutoInstancing = !!i1311[8]
  i1310.enableDynamicBatching = !!i1311[9]
  i1310.lightmapEncodingQuality = i1311[10]
  i1310.desiredColorSpace = i1311[11]
  var i1319 = i1311[12]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1310.allTags = i1318
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.value = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1327 = data
  i1326.id = i1327[0]
  i1326.name = i1327[1]
  i1326.value = i1327[2]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1331 = data
  i1330.id = i1331[0]
  i1330.name = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1333 = data
  i1332.fixedDeltaTime = i1333[0]
  i1332.maximumDeltaTime = i1333[1]
  i1332.timeScale = i1333[2]
  i1332.maximumParticleTimestep = i1333[3]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1335 = data
  i1334.gravity = new pc.Vec3( i1335[0], i1335[1], i1335[2] )
  i1334.defaultSolverIterations = i1335[3]
  i1334.bounceThreshold = i1335[4]
  i1334.autoSyncTransforms = !!i1335[5]
  i1334.autoSimulation = !!i1335[6]
  var i1337 = i1335[7]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1337[i + 0]) );
  }
  i1334.collisionMatrix = i1336
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1341 = data
  i1340.enabled = !!i1341[0]
  i1340.layerId = i1341[1]
  i1340.otherLayerId = i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'material')
  i1342.gravity = new pc.Vec2( i1343[2], i1343[3] )
  i1342.positionIterations = i1343[4]
  i1342.velocityIterations = i1343[5]
  i1342.velocityThreshold = i1343[6]
  i1342.maxLinearCorrection = i1343[7]
  i1342.maxAngularCorrection = i1343[8]
  i1342.maxTranslationSpeed = i1343[9]
  i1342.maxRotationSpeed = i1343[10]
  i1342.baumgarteScale = i1343[11]
  i1342.baumgarteTOIScale = i1343[12]
  i1342.timeToSleep = i1343[13]
  i1342.linearSleepTolerance = i1343[14]
  i1342.angularSleepTolerance = i1343[15]
  i1342.defaultContactOffset = i1343[16]
  i1342.autoSimulation = !!i1343[17]
  i1342.queriesHitTriggers = !!i1343[18]
  i1342.queriesStartInColliders = !!i1343[19]
  i1342.callbacksOnDisable = !!i1343[20]
  i1342.reuseCollisionCallbacks = !!i1343[21]
  i1342.autoSyncTransforms = !!i1343[22]
  var i1345 = i1343[23]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1345[i + 0]) );
  }
  i1342.collisionMatrix = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.layerId = i1349[1]
  i1348.otherLayerId = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1353[i + 0]) );
  }
  i1350.qualityLevels = i1352
  var i1355 = i1351[1]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1350.names = i1354
  i1350.shadows = i1351[2]
  i1350.anisotropicFiltering = i1351[3]
  i1350.antiAliasing = i1351[4]
  i1350.lodBias = i1351[5]
  i1350.shadowCascades = i1351[6]
  i1350.shadowDistance = i1351[7]
  i1350.shadowmaskMode = i1351[8]
  i1350.shadowProjection = i1351[9]
  i1350.shadowResolution = i1351[10]
  i1350.softParticles = !!i1351[11]
  i1350.softVegetation = !!i1351[12]
  i1350.activeColorSpace = i1351[13]
  i1350.desiredColorSpace = i1351[14]
  i1350.masterTextureLimit = i1351[15]
  i1350.maxQueuedFrames = i1351[16]
  i1350.particleRaycastBudget = i1351[17]
  i1350.pixelLightCount = i1351[18]
  i1350.realtimeReflectionProbes = !!i1351[19]
  i1350.shadowCascade2Split = i1351[20]
  i1350.shadowCascade4Split = new pc.Vec3( i1351[21], i1351[22], i1351[23] )
  i1350.streamingMipmapsActive = !!i1351[24]
  i1350.vSyncCount = i1351[25]
  i1350.asyncUploadBufferSize = i1351[26]
  i1350.asyncUploadTimeSlice = i1351[27]
  i1350.billboardsFaceCameraPosition = !!i1351[28]
  i1350.shadowNearPlaneOffset = i1351[29]
  i1350.streamingMipmapsMemoryBudget = i1351[30]
  i1350.maximumLODLevel = i1351[31]
  i1350.streamingMipmapsAddAllCameras = !!i1351[32]
  i1350.streamingMipmapsMaxLevelReduction = i1351[33]
  i1350.streamingMipmapsRenderersPerFrame = i1351[34]
  i1350.resolutionScalingFixedDPIFactor = i1351[35]
  i1350.streamingMipmapsMaxFileIORequests = i1351[36]
  i1350.currentQualityLevel = i1351[37]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1361 = data
  i1360.weight = i1361[0]
  i1360.vertices = i1361[1]
  i1360.normals = i1361[2]
  i1360.tangents = i1361[3]
  return i1360
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1363 = data
  i1362.xPlacement = i1363[0]
  i1362.yPlacement = i1363[1]
  i1362.xAdvance = i1363[2]
  i1362.yAdvance = i1363[3]
  return i1362
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[102],"103":[25],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[113],"114":[113],"115":[113],"116":[113],"117":[113],"118":[113],"119":[113],"120":[113],"121":[113],"122":[113],"123":[113],"124":[113],"125":[113],"126":[25],"127":[5],"128":[129],"130":[129],"35":[11],"131":[14,12,11],"64":[11],"132":[25],"27":[25],"29":[28],"133":[134],"135":[11],"136":[11],"37":[35],"42":[14,11],"137":[11],"36":[35],"44":[11],"138":[11],"71":[11],"139":[11],"49":[11],"140":[11],"43":[11],"53":[11],"141":[11],"38":[14,11],"142":[11],"52":[11],"48":[11],"143":[11],"47":[14,11],"57":[11],"144":[33],"145":[33],"34":[33],"146":[33],"147":[25],"148":[25],"149":[134],"150":[11],"151":[5,11],"23":[11,14],"152":[11],"153":[14,11],"154":[5],"155":[14,11],"156":[11],"157":[134]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Slot","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","Stuff","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CanvasRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.CanvasGroup","GameManager","GridManager","UnityEngine.GameObject","DragAndDropManager","UIManager","TMPro.TextMeshProUGUI","EffectsManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.Image","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 06:03:32";

Deserializers.lunaDaysRunning = "1.6";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "tjddn831-gmail-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1809";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3697";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "35060ef5-f302-4508-9a15-dc015dd82f84";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

