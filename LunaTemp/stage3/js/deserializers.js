var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3410 = root || request.c( 'UnityEngine.JointSpring' )
  var i3411 = data
  i3410.spring = i3411[0]
  i3410.damper = i3411[1]
  i3410.targetPosition = i3411[2]
  return i3410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3412 = root || request.c( 'UnityEngine.JointMotor' )
  var i3413 = data
  i3412.m_TargetVelocity = i3413[0]
  i3412.m_Force = i3413[1]
  i3412.m_FreeSpin = i3413[2]
  return i3412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3414 = root || request.c( 'UnityEngine.JointLimits' )
  var i3415 = data
  i3414.m_Min = i3415[0]
  i3414.m_Max = i3415[1]
  i3414.m_Bounciness = i3415[2]
  i3414.m_BounceMinVelocity = i3415[3]
  i3414.m_ContactDistance = i3415[4]
  i3414.minBounce = i3415[5]
  i3414.maxBounce = i3415[6]
  return i3414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3416 = root || request.c( 'UnityEngine.JointDrive' )
  var i3417 = data
  i3416.m_PositionSpring = i3417[0]
  i3416.m_PositionDamper = i3417[1]
  i3416.m_MaximumForce = i3417[2]
  i3416.m_UseAcceleration = i3417[3]
  return i3416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3419 = data
  i3418.m_Spring = i3419[0]
  i3418.m_Damper = i3419[1]
  return i3418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3421 = data
  i3420.m_Limit = i3421[0]
  i3420.m_Bounciness = i3421[1]
  i3420.m_ContactDistance = i3421[2]
  return i3420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3423 = data
  i3422.m_ExtremumSlip = i3423[0]
  i3422.m_ExtremumValue = i3423[1]
  i3422.m_AsymptoteSlip = i3423[2]
  i3422.m_AsymptoteValue = i3423[3]
  i3422.m_Stiffness = i3423[4]
  return i3422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3425 = data
  i3424.m_LowerAngle = i3425[0]
  i3424.m_UpperAngle = i3425[1]
  return i3424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3427 = data
  i3426.m_MotorSpeed = i3427[0]
  i3426.m_MaximumMotorTorque = i3427[1]
  return i3426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3429 = data
  i3428.m_DampingRatio = i3429[0]
  i3428.m_Frequency = i3429[1]
  i3428.m_Angle = i3429[2]
  return i3428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3431 = data
  i3430.m_LowerTranslation = i3431[0]
  i3430.m_UpperTranslation = i3431[1]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3433 = data
  i3432.position = new pc.Vec3( i3433[0], i3433[1], i3433[2] )
  i3432.scale = new pc.Vec3( i3433[3], i3433[4], i3433[5] )
  i3432.rotation = new pc.Quat(i3433[6], i3433[7], i3433[8], i3433[9])
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3435 = data
  i3434.name = i3435[0]
  i3434.tagId = i3435[1]
  i3434.enabled = !!i3435[2]
  i3434.isStatic = !!i3435[3]
  i3434.layer = i3435[4]
  return i3434
}

Deserializers["Slot"] = function (request, data, root) {
  var i3436 = root || request.c( 'Slot' )
  var i3437 = data
  request.r(i3437[0], i3437[1], 0, i3436, 'placedStuff')
  i3436.isCorrectlyFilled = !!i3437[2]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3439 = data
  request.r(i3439[0], i3439[1], 0, i3438, 'sharedMesh')
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3441 = data
  request.r(i3441[0], i3441[1], 0, i3440, 'additionalVertexStreams')
  i3440.enabled = !!i3441[2]
  request.r(i3441[3], i3441[4], 0, i3440, 'sharedMaterial')
  var i3443 = i3441[5]
  var i3442 = []
  for(var i = 0; i < i3443.length; i += 2) {
  request.r(i3443[i + 0], i3443[i + 1], 2, i3442, '')
  }
  i3440.sharedMaterials = i3442
  i3440.receiveShadows = !!i3441[6]
  i3440.shadowCastingMode = i3441[7]
  i3440.sortingLayerID = i3441[8]
  i3440.sortingOrder = i3441[9]
  i3440.lightmapIndex = i3441[10]
  i3440.lightmapSceneIndex = i3441[11]
  i3440.lightmapScaleOffset = new pc.Vec4( i3441[12], i3441[13], i3441[14], i3441[15] )
  i3440.lightProbeUsage = i3441[16]
  i3440.reflectionProbeUsage = i3441[17]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3447 = data
  i3446.center = new pc.Vec3( i3447[0], i3447[1], i3447[2] )
  i3446.size = new pc.Vec3( i3447[3], i3447[4], i3447[5] )
  i3446.enabled = !!i3447[6]
  i3446.isTrigger = !!i3447[7]
  request.r(i3447[8], i3447[9], 0, i3446, 'material')
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3449 = data
  i3448.name = i3449[0]
  i3448.halfPrecision = !!i3449[1]
  i3448.useUInt32IndexFormat = !!i3449[2]
  i3448.vertexCount = i3449[3]
  i3448.aabb = i3449[4]
  var i3451 = i3449[5]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( !!i3451[i + 0] );
  }
  i3448.streams = i3450
  i3448.vertices = i3449[6]
  var i3453 = i3449[7]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3453[i + 0]) );
  }
  i3448.subMeshes = i3452
  var i3455 = i3449[8]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 16) {
    i3454.push( new pc.Mat4().setData(i3455[i + 0], i3455[i + 1], i3455[i + 2], i3455[i + 3],  i3455[i + 4], i3455[i + 5], i3455[i + 6], i3455[i + 7],  i3455[i + 8], i3455[i + 9], i3455[i + 10], i3455[i + 11],  i3455[i + 12], i3455[i + 13], i3455[i + 14], i3455[i + 15]) );
  }
  i3448.bindposes = i3454
  var i3457 = i3449[9]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3457[i + 0]) );
  }
  i3448.blendShapes = i3456
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3463 = data
  i3462.triangles = i3463[0]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3469 = data
  i3468.name = i3469[0]
  var i3471 = i3469[1]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3471[i + 0]) );
  }
  i3468.frames = i3470
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3472 = root || new pc.UnityMaterial()
  var i3473 = data
  i3472.name = i3473[0]
  request.r(i3473[1], i3473[2], 0, i3472, 'shader')
  i3472.renderQueue = i3473[3]
  i3472.enableInstancing = !!i3473[4]
  var i3475 = i3473[5]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3475[i + 0]) );
  }
  i3472.floatParameters = i3474
  var i3477 = i3473[6]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3477[i + 0]) );
  }
  i3472.colorParameters = i3476
  var i3479 = i3473[7]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3479[i + 0]) );
  }
  i3472.vectorParameters = i3478
  var i3481 = i3473[8]
  var i3480 = []
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3481[i + 0]) );
  }
  i3472.textureParameters = i3480
  var i3483 = i3473[9]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3483[i + 0]) );
  }
  i3472.materialFlags = i3482
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.value = i3487[1]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3491 = data
  i3490.name = i3491[0]
  i3490.value = new pc.Color(i3491[1], i3491[2], i3491[3], i3491[4])
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3495 = data
  i3494.name = i3495[0]
  i3494.value = new pc.Vec4( i3495[1], i3495[2], i3495[3], i3495[4] )
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3499 = data
  i3498.name = i3499[0]
  request.r(i3499[1], i3499[2], 0, i3498, 'value')
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3503 = data
  i3502.name = i3503[0]
  i3502.enabled = !!i3503[1]
  return i3502
}

Deserializers["Stuff"] = function (request, data, root) {
  var i3504 = root || request.c( 'Stuff' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, '_renderer')
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3507 = data
  i3506.name = i3507[0]
  i3506.width = i3507[1]
  i3506.height = i3507[2]
  i3506.mipmapCount = i3507[3]
  i3506.anisoLevel = i3507[4]
  i3506.filterMode = i3507[5]
  i3506.hdr = !!i3507[6]
  i3506.format = i3507[7]
  i3506.wrapMode = i3507[8]
  i3506.alphaIsTransparency = !!i3507[9]
  i3506.alphaSource = i3507[10]
  i3506.graphicsFormat = i3507[11]
  i3506.sRGBTexture = !!i3507[12]
  i3506.desiredColorSpace = i3507[13]
  i3506.wrapU = i3507[14]
  i3506.wrapV = i3507[15]
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3509 = data
  i3508.pivot = new pc.Vec2( i3509[0], i3509[1] )
  i3508.anchorMin = new pc.Vec2( i3509[2], i3509[3] )
  i3508.anchorMax = new pc.Vec2( i3509[4], i3509[5] )
  i3508.sizeDelta = new pc.Vec2( i3509[6], i3509[7] )
  i3508.anchoredPosition3D = new pc.Vec3( i3509[8], i3509[9], i3509[10] )
  i3508.rotation = new pc.Quat(i3509[11], i3509[12], i3509[13], i3509[14])
  i3508.scale = new pc.Vec3( i3509[15], i3509[16], i3509[17] )
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3511 = data
  i3510.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3511[0], i3510.main)
  i3510.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3511[1], i3510.colorBySpeed)
  i3510.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3511[2], i3510.colorOverLifetime)
  i3510.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3511[3], i3510.emission)
  i3510.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3511[4], i3510.rotationBySpeed)
  i3510.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3511[5], i3510.rotationOverLifetime)
  i3510.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3511[6], i3510.shape)
  i3510.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3511[7], i3510.sizeBySpeed)
  i3510.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3511[8], i3510.sizeOverLifetime)
  i3510.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3511[9], i3510.textureSheetAnimation)
  i3510.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3511[10], i3510.velocityOverLifetime)
  i3510.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3511[11], i3510.noise)
  i3510.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3511[12], i3510.inheritVelocity)
  i3510.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3511[13], i3510.forceOverLifetime)
  i3510.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3511[14], i3510.limitVelocityOverLifetime)
  i3510.useAutoRandomSeed = !!i3511[15]
  i3510.randomSeed = i3511[16]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3512 = root || new pc.ParticleSystemMain()
  var i3513 = data
  i3512.duration = i3513[0]
  i3512.loop = !!i3513[1]
  i3512.prewarm = !!i3513[2]
  i3512.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[3], i3512.startDelay)
  i3512.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[4], i3512.startLifetime)
  i3512.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[5], i3512.startSpeed)
  i3512.startSize3D = !!i3513[6]
  i3512.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[7], i3512.startSizeX)
  i3512.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[8], i3512.startSizeY)
  i3512.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[9], i3512.startSizeZ)
  i3512.startRotation3D = !!i3513[10]
  i3512.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[11], i3512.startRotationX)
  i3512.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[12], i3512.startRotationY)
  i3512.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[13], i3512.startRotationZ)
  i3512.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3513[14], i3512.startColor)
  i3512.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3513[15], i3512.gravityModifier)
  i3512.simulationSpace = i3513[16]
  request.r(i3513[17], i3513[18], 0, i3512, 'customSimulationSpace')
  i3512.simulationSpeed = i3513[19]
  i3512.useUnscaledTime = !!i3513[20]
  i3512.scalingMode = i3513[21]
  i3512.playOnAwake = !!i3513[22]
  i3512.maxParticles = i3513[23]
  i3512.emitterVelocityMode = i3513[24]
  i3512.stopAction = i3513[25]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3514 = root || new pc.MinMaxCurve()
  var i3515 = data
  i3514.mode = i3515[0]
  i3514.curveMin = new pc.AnimationCurve( { keys_flow: i3515[1] } )
  i3514.curveMax = new pc.AnimationCurve( { keys_flow: i3515[2] } )
  i3514.curveMultiplier = i3515[3]
  i3514.constantMin = i3515[4]
  i3514.constantMax = i3515[5]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3516 = root || new pc.MinMaxGradient()
  var i3517 = data
  i3516.mode = i3517[0]
  i3516.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3517[1], i3516.gradientMin)
  i3516.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3517[2], i3516.gradientMax)
  i3516.colorMin = new pc.Color(i3517[3], i3517[4], i3517[5], i3517[6])
  i3516.colorMax = new pc.Color(i3517[7], i3517[8], i3517[9], i3517[10])
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3519 = data
  i3518.mode = i3519[0]
  var i3521 = i3519[1]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3521[i + 0]) );
  }
  i3518.colorKeys = i3520
  var i3523 = i3519[2]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3523[i + 0]) );
  }
  i3518.alphaKeys = i3522
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3524 = root || new pc.ParticleSystemColorBySpeed()
  var i3525 = data
  i3524.enabled = !!i3525[0]
  i3524.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3525[1], i3524.color)
  i3524.range = new pc.Vec2( i3525[2], i3525[3] )
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3529 = data
  i3528.color = new pc.Color(i3529[0], i3529[1], i3529[2], i3529[3])
  i3528.time = i3529[4]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3533 = data
  i3532.alpha = i3533[0]
  i3532.time = i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3534 = root || new pc.ParticleSystemColorOverLifetime()
  var i3535 = data
  i3534.enabled = !!i3535[0]
  i3534.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3535[1], i3534.color)
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3536 = root || new pc.ParticleSystemEmitter()
  var i3537 = data
  i3536.enabled = !!i3537[0]
  i3536.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[1], i3536.rateOverTime)
  i3536.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3537[2], i3536.rateOverDistance)
  var i3539 = i3537[3]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3539[i + 0]) );
  }
  i3536.bursts = i3538
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3542 = root || new pc.ParticleSystemBurst()
  var i3543 = data
  i3542.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[0], i3542.count)
  i3542.cycleCount = i3543[1]
  i3542.minCount = i3543[2]
  i3542.maxCount = i3543[3]
  i3542.repeatInterval = i3543[4]
  i3542.time = i3543[5]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3544 = root || new pc.ParticleSystemRotationBySpeed()
  var i3545 = data
  i3544.enabled = !!i3545[0]
  i3544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[1], i3544.x)
  i3544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[2], i3544.y)
  i3544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[3], i3544.z)
  i3544.separateAxes = !!i3545[4]
  i3544.range = new pc.Vec2( i3545[5], i3545[6] )
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3546 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3547 = data
  i3546.enabled = !!i3547[0]
  i3546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[1], i3546.x)
  i3546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[2], i3546.y)
  i3546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[3], i3546.z)
  i3546.separateAxes = !!i3547[4]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3548 = root || new pc.ParticleSystemShape()
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.shapeType = i3549[1]
  i3548.randomDirectionAmount = i3549[2]
  i3548.sphericalDirectionAmount = i3549[3]
  i3548.randomPositionAmount = i3549[4]
  i3548.alignToDirection = !!i3549[5]
  i3548.radius = i3549[6]
  i3548.radiusMode = i3549[7]
  i3548.radiusSpread = i3549[8]
  i3548.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[9], i3548.radiusSpeed)
  i3548.radiusThickness = i3549[10]
  i3548.angle = i3549[11]
  i3548.length = i3549[12]
  i3548.boxThickness = new pc.Vec3( i3549[13], i3549[14], i3549[15] )
  i3548.meshShapeType = i3549[16]
  request.r(i3549[17], i3549[18], 0, i3548, 'mesh')
  request.r(i3549[19], i3549[20], 0, i3548, 'meshRenderer')
  request.r(i3549[21], i3549[22], 0, i3548, 'skinnedMeshRenderer')
  i3548.useMeshMaterialIndex = !!i3549[23]
  i3548.meshMaterialIndex = i3549[24]
  i3548.useMeshColors = !!i3549[25]
  i3548.normalOffset = i3549[26]
  i3548.arc = i3549[27]
  i3548.arcMode = i3549[28]
  i3548.arcSpread = i3549[29]
  i3548.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[30], i3548.arcSpeed)
  i3548.donutRadius = i3549[31]
  i3548.position = new pc.Vec3( i3549[32], i3549[33], i3549[34] )
  i3548.rotation = new pc.Vec3( i3549[35], i3549[36], i3549[37] )
  i3548.scale = new pc.Vec3( i3549[38], i3549[39], i3549[40] )
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3550 = root || new pc.ParticleSystemSizeBySpeed()
  var i3551 = data
  i3550.enabled = !!i3551[0]
  i3550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[1], i3550.x)
  i3550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[2], i3550.y)
  i3550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[3], i3550.z)
  i3550.separateAxes = !!i3551[4]
  i3550.range = new pc.Vec2( i3551[5], i3551[6] )
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3552 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3553 = data
  i3552.enabled = !!i3553[0]
  i3552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[1], i3552.x)
  i3552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[2], i3552.y)
  i3552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[3], i3552.z)
  i3552.separateAxes = !!i3553[4]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3554 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3555 = data
  i3554.enabled = !!i3555[0]
  i3554.mode = i3555[1]
  i3554.animation = i3555[2]
  i3554.numTilesX = i3555[3]
  i3554.numTilesY = i3555[4]
  i3554.useRandomRow = !!i3555[5]
  i3554.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[6], i3554.frameOverTime)
  i3554.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[7], i3554.startFrame)
  i3554.cycleCount = i3555[8]
  i3554.rowIndex = i3555[9]
  i3554.flipU = i3555[10]
  i3554.flipV = i3555[11]
  i3554.spriteCount = i3555[12]
  var i3557 = i3555[13]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 2) {
  request.r(i3557[i + 0], i3557[i + 1], 2, i3556, '')
  }
  i3554.sprites = i3556
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3560 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3561 = data
  i3560.enabled = !!i3561[0]
  i3560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[1], i3560.x)
  i3560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[2], i3560.y)
  i3560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[3], i3560.z)
  i3560.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[4], i3560.radial)
  i3560.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[5], i3560.speedModifier)
  i3560.space = i3561[6]
  i3560.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[7], i3560.orbitalX)
  i3560.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[8], i3560.orbitalY)
  i3560.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[9], i3560.orbitalZ)
  i3560.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[10], i3560.orbitalOffsetX)
  i3560.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[11], i3560.orbitalOffsetY)
  i3560.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[12], i3560.orbitalOffsetZ)
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3562 = root || new pc.ParticleSystemNoise()
  var i3563 = data
  i3562.enabled = !!i3563[0]
  i3562.separateAxes = !!i3563[1]
  i3562.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[2], i3562.strengthX)
  i3562.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[3], i3562.strengthY)
  i3562.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[4], i3562.strengthZ)
  i3562.frequency = i3563[5]
  i3562.damping = !!i3563[6]
  i3562.octaveCount = i3563[7]
  i3562.octaveMultiplier = i3563[8]
  i3562.octaveScale = i3563[9]
  i3562.quality = i3563[10]
  i3562.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[11], i3562.scrollSpeed)
  i3562.scrollSpeedMultiplier = i3563[12]
  i3562.remapEnabled = !!i3563[13]
  i3562.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[14], i3562.remapX)
  i3562.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[15], i3562.remapY)
  i3562.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[16], i3562.remapZ)
  i3562.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[17], i3562.positionAmount)
  i3562.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[18], i3562.rotationAmount)
  i3562.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[19], i3562.sizeAmount)
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3564 = root || new pc.ParticleSystemInheritVelocity()
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.mode = i3565[1]
  i3564.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[2], i3564.curve)
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemForceOverLifetime()
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[1], i3566.x)
  i3566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[2], i3566.y)
  i3566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[3], i3566.z)
  i3566.space = i3567[4]
  i3566.randomized = !!i3567[5]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[1], i3568.limit)
  i3568.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[2], i3568.limitX)
  i3568.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.limitY)
  i3568.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[4], i3568.limitZ)
  i3568.dampen = i3569[5]
  i3568.separateAxes = !!i3569[6]
  i3568.space = i3569[7]
  i3568.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[8], i3568.drag)
  i3568.multiplyDragByParticleSize = !!i3569[9]
  i3568.multiplyDragByParticleVelocity = !!i3569[10]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3571 = data
  i3570.enabled = !!i3571[0]
  request.r(i3571[1], i3571[2], 0, i3570, 'sharedMaterial')
  var i3573 = i3571[3]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3570.sharedMaterials = i3572
  i3570.receiveShadows = !!i3571[4]
  i3570.shadowCastingMode = i3571[5]
  i3570.sortingLayerID = i3571[6]
  i3570.sortingOrder = i3571[7]
  i3570.lightmapIndex = i3571[8]
  i3570.lightmapSceneIndex = i3571[9]
  i3570.lightmapScaleOffset = new pc.Vec4( i3571[10], i3571[11], i3571[12], i3571[13] )
  i3570.lightProbeUsage = i3571[14]
  i3570.reflectionProbeUsage = i3571[15]
  request.r(i3571[16], i3571[17], 0, i3570, 'mesh')
  i3570.meshCount = i3571[18]
  i3570.activeVertexStreamsCount = i3571[19]
  i3570.alignment = i3571[20]
  i3570.renderMode = i3571[21]
  i3570.sortMode = i3571[22]
  i3570.lengthScale = i3571[23]
  i3570.velocityScale = i3571[24]
  i3570.cameraVelocityScale = i3571[25]
  i3570.normalDirection = i3571[26]
  i3570.sortingFudge = i3571[27]
  i3570.minParticleSize = i3571[28]
  i3570.maxParticleSize = i3571[29]
  i3570.pivot = new pc.Vec3( i3571[30], i3571[31], i3571[32] )
  request.r(i3571[33], i3571[34], 0, i3570, 'trailMaterial')
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3575 = data
  i3574.cullTransparentMesh = !!i3575[0]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3577 = data
  i3576.enabled = !!i3577[0]
  request.r(i3577[1], i3577[2], 0, i3576, 'sharedMaterial')
  var i3579 = i3577[3]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 2) {
  request.r(i3579[i + 0], i3579[i + 1], 2, i3578, '')
  }
  i3576.sharedMaterials = i3578
  i3576.receiveShadows = !!i3577[4]
  i3576.shadowCastingMode = i3577[5]
  i3576.sortingLayerID = i3577[6]
  i3576.sortingOrder = i3577[7]
  i3576.lightmapIndex = i3577[8]
  i3576.lightmapSceneIndex = i3577[9]
  i3576.lightmapScaleOffset = new pc.Vec4( i3577[10], i3577[11], i3577[12], i3577[13] )
  i3576.lightProbeUsage = i3577[14]
  i3576.reflectionProbeUsage = i3577[15]
  i3576.color = new pc.Color(i3577[16], i3577[17], i3577[18], i3577[19])
  request.r(i3577[20], i3577[21], 0, i3576, 'sprite')
  i3576.flipX = !!i3577[22]
  i3576.flipY = !!i3577[23]
  i3576.drawMode = i3577[24]
  i3576.size = new pc.Vec2( i3577[25], i3577[26] )
  i3576.tileMode = i3577[27]
  i3576.adaptiveModeThreshold = i3577[28]
  i3576.maskInteraction = i3577[29]
  i3576.spriteSortPoint = i3577[30]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3581 = data
  i3580.m_Alpha = i3581[0]
  i3580.m_Interactable = !!i3581[1]
  i3580.m_BlocksRaycasts = !!i3581[2]
  i3580.m_IgnoreParentGroups = !!i3581[3]
  i3580.enabled = !!i3581[4]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3583 = data
  i3582.name = i3583[0]
  i3582.atlasId = i3583[1]
  i3582.mipmapCount = i3583[2]
  i3582.hdr = !!i3583[3]
  i3582.size = i3583[4]
  i3582.anisoLevel = i3583[5]
  i3582.filterMode = i3583[6]
  var i3585 = i3583[7]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 4) {
    i3584.push( UnityEngine.Rect.MinMaxRect(i3585[i + 0], i3585[i + 1], i3585[i + 2], i3585[i + 3]) );
  }
  i3582.rects = i3584
  i3582.wrapU = i3583[8]
  i3582.wrapV = i3583[9]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3589 = data
  i3588.name = i3589[0]
  i3588.index = i3589[1]
  i3588.startup = !!i3589[2]
  return i3588
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3590 = root || request.c( 'GameManager' )
  var i3591 = data
  i3590.idleTimeThreshold = i3591[0]
  i3590.dragCountForEndCard = i3591[1]
  i3590.dragCountForStoreOpen = i3591[2]
  return i3590
}

Deserializers["GridManager"] = function (request, data, root) {
  var i3592 = root || request.c( 'GridManager' )
  var i3593 = data
  i3592.verticalOffset = i3593[0]
  i3592.seed = i3593[1]
  request.r(i3593[2], i3593[3], 0, i3592, 'prefabsParent')
  request.r(i3593[4], i3593[5], 0, i3592, 'rowParentPrefab')
  request.r(i3593[6], i3593[7], 0, i3592, 'slotPrefab')
  request.r(i3593[8], i3593[9], 0, i3592, 'stuffPrefab')
  i3592.slotScale = i3593[10]
  i3592.stuffScale = i3593[11]
  i3592.slotWidth = i3593[12]
  i3592.slotHeight = i3593[13]
  var i3595 = i3593[14]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( request.d('RowData', i3595[i + 0]) );
  }
  i3592.levelData = i3594
  i3592.rowMoveDownDuration = i3593[15]
  return i3592
}

Deserializers["RowData"] = function (request, data, root) {
  var i3598 = root || request.c( 'RowData' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'material')
  i3598.wrongStuffCount = i3599[2]
  return i3598
}

Deserializers["DragAndDropManager"] = function (request, data, root) {
  var i3600 = root || request.c( 'DragAndDropManager' )
  var i3601 = data
  i3600.dragZOffset = i3601[0]
  i3600.slotLayer = UnityEngine.LayerMask.FromIntegerValue( i3601[1] )
  return i3600
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3602 = root || request.c( 'UIManager' )
  var i3603 = data
  request.r(i3603[0], i3603[1], 0, i3602, 'textBackGroundObject')
  request.r(i3603[2], i3603[3], 0, i3602, 'idlePromptText')
  i3602.startY = i3603[4]
  i3602.endY = i3603[5]
  i3602.moveDuration = i3603[6]
  request.r(i3603[7], i3603[8], 0, i3602, 'endCardPanel')
  request.r(i3603[9], i3603[10], 0, i3602, 'playNowButton')
  return i3602
}

Deserializers["EffectsManager"] = function (request, data, root) {
  var i3604 = root || request.c( 'EffectsManager' )
  var i3605 = data
  request.r(i3605[0], i3605[1], 0, i3604, 'rowClearParticlePrefab')
  request.r(i3605[2], i3605[3], 0, i3604, 'goodTextPrefab')
  i3604.poolSize = i3605[4]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3607 = data
  i3606.enabled = !!i3607[0]
  i3606.aspect = i3607[1]
  i3606.orthographic = !!i3607[2]
  i3606.orthographicSize = i3607[3]
  i3606.backgroundColor = new pc.Color(i3607[4], i3607[5], i3607[6], i3607[7])
  i3606.nearClipPlane = i3607[8]
  i3606.farClipPlane = i3607[9]
  i3606.fieldOfView = i3607[10]
  i3606.depth = i3607[11]
  i3606.clearFlags = i3607[12]
  i3606.cullingMask = i3607[13]
  i3606.rect = i3607[14]
  request.r(i3607[15], i3607[16], 0, i3606, 'targetTexture')
  i3606.usePhysicalProperties = !!i3607[17]
  i3606.focalLength = i3607[18]
  i3606.sensorSize = new pc.Vec2( i3607[19], i3607[20] )
  i3606.lensShift = new pc.Vec2( i3607[21], i3607[22] )
  i3606.gateFit = i3607[23]
  i3606.commandBufferCount = i3607[24]
  i3606.cameraType = i3607[25]
  return i3606
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i3609 = data
  i3608.m_RenderShadows = !!i3609[0]
  i3608.m_RequiresDepthTextureOption = i3609[1]
  i3608.m_RequiresOpaqueTextureOption = i3609[2]
  i3608.m_CameraType = i3609[3]
  var i3611 = i3609[4]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3611.length; i += 2) {
  request.r(i3611[i + 0], i3611[i + 1], 1, i3610, '')
  }
  i3608.m_Cameras = i3610
  i3608.m_RendererIndex = i3609[5]
  i3608.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3609[6] )
  request.r(i3609[7], i3609[8], 0, i3608, 'm_VolumeTrigger')
  i3608.m_VolumeFrameworkUpdateModeOption = i3609[9]
  i3608.m_RenderPostProcessing = !!i3609[10]
  i3608.m_Antialiasing = i3609[11]
  i3608.m_AntialiasingQuality = i3609[12]
  i3608.m_StopNaN = !!i3609[13]
  i3608.m_Dithering = !!i3609[14]
  i3608.m_ClearDepth = !!i3609[15]
  i3608.m_AllowXRRendering = !!i3609[16]
  i3608.m_AllowHDROutput = !!i3609[17]
  i3608.m_UseScreenCoordOverride = !!i3609[18]
  i3608.m_ScreenSizeOverride = new pc.Vec4( i3609[19], i3609[20], i3609[21], i3609[22] )
  i3608.m_ScreenCoordScaleBias = new pc.Vec4( i3609[23], i3609[24], i3609[25], i3609[26] )
  i3608.m_RequiresDepthTexture = !!i3609[27]
  i3608.m_RequiresColorTexture = !!i3609[28]
  i3608.m_Version = i3609[29]
  i3608.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i3609[30], i3608.m_TaaSettings)
  return i3608
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i3615 = data
  i3614.m_Quality = i3615[0]
  i3614.m_FrameInfluence = i3615[1]
  i3614.m_JitterScale = i3615[2]
  i3614.m_MipBias = i3615[3]
  i3614.m_VarianceClampScale = i3615[4]
  i3614.m_ContrastAdaptiveSharpening = i3615[5]
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3617 = data
  i3616.enabled = !!i3617[0]
  i3616.type = i3617[1]
  i3616.color = new pc.Color(i3617[2], i3617[3], i3617[4], i3617[5])
  i3616.cullingMask = i3617[6]
  i3616.intensity = i3617[7]
  i3616.range = i3617[8]
  i3616.spotAngle = i3617[9]
  i3616.shadows = i3617[10]
  i3616.shadowNormalBias = i3617[11]
  i3616.shadowBias = i3617[12]
  i3616.shadowStrength = i3617[13]
  i3616.shadowResolution = i3617[14]
  i3616.lightmapBakeType = i3617[15]
  i3616.renderMode = i3617[16]
  request.r(i3617[17], i3617[18], 0, i3616, 'cookie')
  i3616.cookieSize = i3617[19]
  return i3616
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3619 = data
  i3618.m_Version = i3619[0]
  i3618.m_UsePipelineSettings = !!i3619[1]
  i3618.m_AdditionalLightsShadowResolutionTier = i3619[2]
  i3618.m_LightLayerMask = i3619[3]
  i3618.m_RenderingLayers = i3619[4]
  i3618.m_CustomShadowLayers = !!i3619[5]
  i3618.m_ShadowLayerMask = i3619[6]
  i3618.m_ShadowRenderingLayers = i3619[7]
  i3618.m_LightCookieSize = new pc.Vec2( i3619[8], i3619[9] )
  i3618.m_LightCookieOffset = new pc.Vec2( i3619[10], i3619[11] )
  i3618.m_SoftShadowQuality = i3619[12]
  return i3618
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i3621 = data
  i3620.priority = i3621[0]
  i3620.blendDistance = i3621[1]
  i3620.weight = i3621[2]
  request.r(i3621[3], i3621[4], 0, i3620, 'sharedProfile')
  i3620.m_IsGlobal = !!i3621[5]
  return i3620
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'm_FirstSelected')
  i3622.m_sendNavigationEvents = !!i3623[2]
  i3622.m_DragThreshold = i3623[3]
  return i3622
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3625 = data
  i3624.m_HorizontalAxis = i3625[0]
  i3624.m_VerticalAxis = i3625[1]
  i3624.m_SubmitButton = i3625[2]
  i3624.m_CancelButton = i3625[3]
  i3624.m_InputActionsPerSecond = i3625[4]
  i3624.m_RepeatDelay = i3625[5]
  i3624.m_ForceModuleActive = !!i3625[6]
  i3624.m_SendPointerHoverToParent = !!i3625[7]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3627 = data
  i3626.enabled = !!i3627[0]
  i3626.planeDistance = i3627[1]
  i3626.referencePixelsPerUnit = i3627[2]
  i3626.isFallbackOverlay = !!i3627[3]
  i3626.renderMode = i3627[4]
  i3626.renderOrder = i3627[5]
  i3626.sortingLayerName = i3627[6]
  i3626.sortingOrder = i3627[7]
  i3626.scaleFactor = i3627[8]
  request.r(i3627[9], i3627[10], 0, i3626, 'worldCamera')
  i3626.overrideSorting = !!i3627[11]
  i3626.pixelPerfect = !!i3627[12]
  i3626.targetDisplay = i3627[13]
  i3626.overridePixelPerfect = !!i3627[14]
  return i3626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3629 = data
  i3628.m_UiScaleMode = i3629[0]
  i3628.m_ReferencePixelsPerUnit = i3629[1]
  i3628.m_ScaleFactor = i3629[2]
  i3628.m_ReferenceResolution = new pc.Vec2( i3629[3], i3629[4] )
  i3628.m_ScreenMatchMode = i3629[5]
  i3628.m_MatchWidthOrHeight = i3629[6]
  i3628.m_PhysicalUnit = i3629[7]
  i3628.m_FallbackScreenDPI = i3629[8]
  i3628.m_DefaultSpriteDPI = i3629[9]
  i3628.m_DynamicPixelsPerUnit = i3629[10]
  i3628.m_PresetInfoIsWorld = !!i3629[11]
  return i3628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3631 = data
  i3630.m_IgnoreReversedGraphics = !!i3631[0]
  i3630.m_BlockingObjects = i3631[1]
  i3630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3631[2] )
  return i3630
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'm_Texture')
  i3632.m_UVRect = UnityEngine.Rect.MinMaxRect(i3633[2], i3633[3], i3633[4], i3633[5])
  request.r(i3633[6], i3633[7], 0, i3632, 'm_Material')
  i3632.m_Maskable = !!i3633[8]
  i3632.m_Color = new pc.Color(i3633[9], i3633[10], i3633[11], i3633[12])
  i3632.m_RaycastTarget = !!i3633[13]
  i3632.m_RaycastPadding = new pc.Vec4( i3633[14], i3633[15], i3633[16], i3633[17] )
  return i3632
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3634 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3635 = data
  i3634.m_hasFontAssetChanged = !!i3635[0]
  request.r(i3635[1], i3635[2], 0, i3634, 'm_baseMaterial')
  i3634.m_maskOffset = new pc.Vec4( i3635[3], i3635[4], i3635[5], i3635[6] )
  i3634.m_text = i3635[7]
  i3634.m_isRightToLeft = !!i3635[8]
  request.r(i3635[9], i3635[10], 0, i3634, 'm_fontAsset')
  request.r(i3635[11], i3635[12], 0, i3634, 'm_sharedMaterial')
  var i3637 = i3635[13]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 2) {
  request.r(i3637[i + 0], i3637[i + 1], 2, i3636, '')
  }
  i3634.m_fontSharedMaterials = i3636
  request.r(i3635[14], i3635[15], 0, i3634, 'm_fontMaterial')
  var i3639 = i3635[16]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 2) {
  request.r(i3639[i + 0], i3639[i + 1], 2, i3638, '')
  }
  i3634.m_fontMaterials = i3638
  i3634.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3635[17], i3635[18], i3635[19], i3635[20])
  i3634.m_fontColor = new pc.Color(i3635[21], i3635[22], i3635[23], i3635[24])
  i3634.m_enableVertexGradient = !!i3635[25]
  i3634.m_colorMode = i3635[26]
  i3634.m_fontColorGradient = request.d('TMPro.VertexGradient', i3635[27], i3634.m_fontColorGradient)
  request.r(i3635[28], i3635[29], 0, i3634, 'm_fontColorGradientPreset')
  request.r(i3635[30], i3635[31], 0, i3634, 'm_spriteAsset')
  i3634.m_tintAllSprites = !!i3635[32]
  request.r(i3635[33], i3635[34], 0, i3634, 'm_StyleSheet')
  i3634.m_TextStyleHashCode = i3635[35]
  i3634.m_overrideHtmlColors = !!i3635[36]
  i3634.m_faceColor = UnityEngine.Color32.ConstructColor(i3635[37], i3635[38], i3635[39], i3635[40])
  i3634.m_fontSize = i3635[41]
  i3634.m_fontSizeBase = i3635[42]
  i3634.m_fontWeight = i3635[43]
  i3634.m_enableAutoSizing = !!i3635[44]
  i3634.m_fontSizeMin = i3635[45]
  i3634.m_fontSizeMax = i3635[46]
  i3634.m_fontStyle = i3635[47]
  i3634.m_HorizontalAlignment = i3635[48]
  i3634.m_VerticalAlignment = i3635[49]
  i3634.m_textAlignment = i3635[50]
  i3634.m_characterSpacing = i3635[51]
  i3634.m_wordSpacing = i3635[52]
  i3634.m_lineSpacing = i3635[53]
  i3634.m_lineSpacingMax = i3635[54]
  i3634.m_paragraphSpacing = i3635[55]
  i3634.m_charWidthMaxAdj = i3635[56]
  i3634.m_enableWordWrapping = !!i3635[57]
  i3634.m_wordWrappingRatios = i3635[58]
  i3634.m_overflowMode = i3635[59]
  request.r(i3635[60], i3635[61], 0, i3634, 'm_linkedTextComponent')
  request.r(i3635[62], i3635[63], 0, i3634, 'parentLinkedComponent')
  i3634.m_enableKerning = !!i3635[64]
  i3634.m_enableExtraPadding = !!i3635[65]
  i3634.checkPaddingRequired = !!i3635[66]
  i3634.m_isRichText = !!i3635[67]
  i3634.m_parseCtrlCharacters = !!i3635[68]
  i3634.m_isOrthographic = !!i3635[69]
  i3634.m_isCullingEnabled = !!i3635[70]
  i3634.m_horizontalMapping = i3635[71]
  i3634.m_verticalMapping = i3635[72]
  i3634.m_uvLineOffset = i3635[73]
  i3634.m_geometrySortingOrder = i3635[74]
  i3634.m_IsTextObjectScaleStatic = !!i3635[75]
  i3634.m_VertexBufferAutoSizeReduction = !!i3635[76]
  i3634.m_useMaxVisibleDescender = !!i3635[77]
  i3634.m_pageToDisplay = i3635[78]
  i3634.m_margin = new pc.Vec4( i3635[79], i3635[80], i3635[81], i3635[82] )
  i3634.m_isUsingLegacyAnimationComponent = !!i3635[83]
  i3634.m_isVolumetricText = !!i3635[84]
  request.r(i3635[85], i3635[86], 0, i3634, 'm_Material')
  i3634.m_Maskable = !!i3635[87]
  i3634.m_Color = new pc.Color(i3635[88], i3635[89], i3635[90], i3635[91])
  i3634.m_RaycastTarget = !!i3635[92]
  i3634.m_RaycastPadding = new pc.Vec4( i3635[93], i3635[94], i3635[95], i3635[96] )
  return i3634
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3640 = root || request.c( 'TMPro.VertexGradient' )
  var i3641 = data
  i3640.topLeft = new pc.Color(i3641[0], i3641[1], i3641[2], i3641[3])
  i3640.topRight = new pc.Color(i3641[4], i3641[5], i3641[6], i3641[7])
  i3640.bottomLeft = new pc.Color(i3641[8], i3641[9], i3641[10], i3641[11])
  i3640.bottomRight = new pc.Color(i3641[12], i3641[13], i3641[14], i3641[15])
  return i3640
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3642 = root || request.c( 'UnityEngine.UI.Image' )
  var i3643 = data
  request.r(i3643[0], i3643[1], 0, i3642, 'm_Sprite')
  i3642.m_Type = i3643[2]
  i3642.m_PreserveAspect = !!i3643[3]
  i3642.m_FillCenter = !!i3643[4]
  i3642.m_FillMethod = i3643[5]
  i3642.m_FillAmount = i3643[6]
  i3642.m_FillClockwise = !!i3643[7]
  i3642.m_FillOrigin = i3643[8]
  i3642.m_UseSpriteMesh = !!i3643[9]
  i3642.m_PixelsPerUnitMultiplier = i3643[10]
  request.r(i3643[11], i3643[12], 0, i3642, 'm_Material')
  i3642.m_Maskable = !!i3643[13]
  i3642.m_Color = new pc.Color(i3643[14], i3643[15], i3643[16], i3643[17])
  i3642.m_RaycastTarget = !!i3643[18]
  i3642.m_RaycastPadding = new pc.Vec4( i3643[19], i3643[20], i3643[21], i3643[22] )
  return i3642
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3644 = root || request.c( 'UnityEngine.UI.Button' )
  var i3645 = data
  i3644.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3645[0], i3644.m_OnClick)
  i3644.m_Navigation = request.d('UnityEngine.UI.Navigation', i3645[1], i3644.m_Navigation)
  i3644.m_Transition = i3645[2]
  i3644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3645[3], i3644.m_Colors)
  i3644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3645[4], i3644.m_SpriteState)
  i3644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3645[5], i3644.m_AnimationTriggers)
  i3644.m_Interactable = !!i3645[6]
  request.r(i3645[7], i3645[8], 0, i3644, 'm_TargetGraphic')
  return i3644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3647 = data
  i3646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3647[0], i3646.m_PersistentCalls)
  return i3646
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3649 = data
  var i3651 = i3649[0]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('UnityEngine.Events.PersistentCall', i3651[i + 0]));
  }
  i3648.m_Calls = i3650
  return i3648
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3655 = data
  request.r(i3655[0], i3655[1], 0, i3654, 'm_Target')
  i3654.m_TargetAssemblyTypeName = i3655[2]
  i3654.m_MethodName = i3655[3]
  i3654.m_Mode = i3655[4]
  i3654.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3655[5], i3654.m_Arguments)
  i3654.m_CallState = i3655[6]
  return i3654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3657 = data
  request.r(i3657[0], i3657[1], 0, i3656, 'm_ObjectArgument')
  i3656.m_ObjectArgumentAssemblyTypeName = i3657[2]
  i3656.m_IntArgument = i3657[3]
  i3656.m_FloatArgument = i3657[4]
  i3656.m_StringArgument = i3657[5]
  i3656.m_BoolArgument = !!i3657[6]
  return i3656
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3659 = data
  i3658.m_Mode = i3659[0]
  i3658.m_WrapAround = !!i3659[1]
  request.r(i3659[2], i3659[3], 0, i3658, 'm_SelectOnUp')
  request.r(i3659[4], i3659[5], 0, i3658, 'm_SelectOnDown')
  request.r(i3659[6], i3659[7], 0, i3658, 'm_SelectOnLeft')
  request.r(i3659[8], i3659[9], 0, i3658, 'm_SelectOnRight')
  return i3658
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3661 = data
  i3660.m_NormalColor = new pc.Color(i3661[0], i3661[1], i3661[2], i3661[3])
  i3660.m_HighlightedColor = new pc.Color(i3661[4], i3661[5], i3661[6], i3661[7])
  i3660.m_PressedColor = new pc.Color(i3661[8], i3661[9], i3661[10], i3661[11])
  i3660.m_SelectedColor = new pc.Color(i3661[12], i3661[13], i3661[14], i3661[15])
  i3660.m_DisabledColor = new pc.Color(i3661[16], i3661[17], i3661[18], i3661[19])
  i3660.m_ColorMultiplier = i3661[20]
  i3660.m_FadeDuration = i3661[21]
  return i3660
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3663 = data
  request.r(i3663[0], i3663[1], 0, i3662, 'm_HighlightedSprite')
  request.r(i3663[2], i3663[3], 0, i3662, 'm_PressedSprite')
  request.r(i3663[4], i3663[5], 0, i3662, 'm_SelectedSprite')
  request.r(i3663[6], i3663[7], 0, i3662, 'm_DisabledSprite')
  return i3662
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3665 = data
  i3664.m_NormalTrigger = i3665[0]
  i3664.m_HighlightedTrigger = i3665[1]
  i3664.m_PressedTrigger = i3665[2]
  i3664.m_SelectedTrigger = i3665[3]
  i3664.m_DisabledTrigger = i3665[4]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3667 = data
  i3666.ambientIntensity = i3667[0]
  i3666.reflectionIntensity = i3667[1]
  i3666.ambientMode = i3667[2]
  i3666.ambientLight = new pc.Color(i3667[3], i3667[4], i3667[5], i3667[6])
  i3666.ambientSkyColor = new pc.Color(i3667[7], i3667[8], i3667[9], i3667[10])
  i3666.ambientGroundColor = new pc.Color(i3667[11], i3667[12], i3667[13], i3667[14])
  i3666.ambientEquatorColor = new pc.Color(i3667[15], i3667[16], i3667[17], i3667[18])
  i3666.fogColor = new pc.Color(i3667[19], i3667[20], i3667[21], i3667[22])
  i3666.fogEndDistance = i3667[23]
  i3666.fogStartDistance = i3667[24]
  i3666.fogDensity = i3667[25]
  i3666.fog = !!i3667[26]
  request.r(i3667[27], i3667[28], 0, i3666, 'skybox')
  i3666.fogMode = i3667[29]
  var i3669 = i3667[30]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3669[i + 0]) );
  }
  i3666.lightmaps = i3668
  i3666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3667[31], i3666.lightProbes)
  i3666.lightmapsMode = i3667[32]
  i3666.mixedBakeMode = i3667[33]
  i3666.environmentLightingMode = i3667[34]
  i3666.ambientProbe = new pc.SphericalHarmonicsL2(i3667[35])
  i3666.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3667[36])
  i3666.useReferenceAmbientProbe = !!i3667[37]
  request.r(i3667[38], i3667[39], 0, i3666, 'customReflection')
  request.r(i3667[40], i3667[41], 0, i3666, 'defaultReflection')
  i3666.defaultReflectionMode = i3667[42]
  i3666.defaultReflectionResolution = i3667[43]
  i3666.sunLightObjectId = i3667[44]
  i3666.pixelLightCount = i3667[45]
  i3666.defaultReflectionHDR = !!i3667[46]
  i3666.hasLightDataAsset = !!i3667[47]
  i3666.hasManualGenerate = !!i3667[48]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3673 = data
  request.r(i3673[0], i3673[1], 0, i3672, 'lightmapColor')
  request.r(i3673[2], i3673[3], 0, i3672, 'lightmapDirection')
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3674 = root || new UnityEngine.LightProbes()
  var i3675 = data
  return i3674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i3683 = data
  request.r(i3683[0], i3683[1], 0, i3682, 'panelPrefab')
  var i3685 = i3683[2]
  var i3684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i3685[i + 0]));
  }
  i3682.prefabs = i3684
  return i3682
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i3689 = data
  i3688.type = i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'prefab')
  return i3688
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i3691 = data
  i3690.m_Spacing = i3691[0]
  i3690.m_ChildForceExpandWidth = !!i3691[1]
  i3690.m_ChildForceExpandHeight = !!i3691[2]
  i3690.m_ChildControlWidth = !!i3691[3]
  i3690.m_ChildControlHeight = !!i3691[4]
  i3690.m_ChildScaleWidth = !!i3691[5]
  i3690.m_ChildScaleHeight = !!i3691[6]
  i3690.m_ReverseArrangement = !!i3691[7]
  i3690.m_Padding = UnityEngine.RectOffset.FromPaddings(i3691[8], i3691[9], i3691[10], i3691[11])
  i3690.m_ChildAlignment = i3691[12]
  return i3690
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3693 = data
  i3692.m_HorizontalFit = i3693[0]
  i3692.m_VerticalFit = i3693[1]
  return i3692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'contentHolder')
  return i3694
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i3697 = data
  request.r(i3697[0], i3697[1], 0, i3696, 'nameLabel')
  request.r(i3697[2], i3697[3], 0, i3696, 'scrollRect')
  request.r(i3697[4], i3697[5], 0, i3696, 'viewport')
  request.r(i3697[6], i3697[7], 0, i3696, 'Canvas')
  return i3696
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3699 = data
  i3698.m_IgnoreLayout = !!i3699[0]
  i3698.m_MinWidth = i3699[1]
  i3698.m_MinHeight = i3699[2]
  i3698.m_PreferredWidth = i3699[3]
  i3698.m_PreferredHeight = i3699[4]
  i3698.m_FlexibleWidth = i3699[5]
  i3698.m_FlexibleHeight = i3699[6]
  i3698.m_LayoutPriority = i3699[7]
  return i3698
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.UI.Text' )
  var i3701 = data
  i3700.m_FontData = request.d('UnityEngine.UI.FontData', i3701[0], i3700.m_FontData)
  i3700.m_Text = i3701[1]
  request.r(i3701[2], i3701[3], 0, i3700, 'm_Material')
  i3700.m_Maskable = !!i3701[4]
  i3700.m_Color = new pc.Color(i3701[5], i3701[6], i3701[7], i3701[8])
  i3700.m_RaycastTarget = !!i3701[9]
  i3700.m_RaycastPadding = new pc.Vec4( i3701[10], i3701[11], i3701[12], i3701[13] )
  return i3700
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'm_Font')
  i3702.m_FontSize = i3703[2]
  i3702.m_FontStyle = i3703[3]
  i3702.m_BestFit = !!i3703[4]
  i3702.m_MinSize = i3703[5]
  i3702.m_MaxSize = i3703[6]
  i3702.m_Alignment = i3703[7]
  i3702.m_AlignByGeometry = !!i3703[8]
  i3702.m_RichText = !!i3703[9]
  i3702.m_HorizontalOverflow = i3703[10]
  i3702.m_VerticalOverflow = i3703[11]
  i3702.m_LineSpacing = i3703[12]
  return i3702
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3705 = data
  request.r(i3705[0], i3705[1], 0, i3704, 'm_Content')
  i3704.m_Horizontal = !!i3705[2]
  i3704.m_Vertical = !!i3705[3]
  i3704.m_MovementType = i3705[4]
  i3704.m_Elasticity = i3705[5]
  i3704.m_Inertia = !!i3705[6]
  i3704.m_DecelerationRate = i3705[7]
  i3704.m_ScrollSensitivity = i3705[8]
  request.r(i3705[9], i3705[10], 0, i3704, 'm_Viewport')
  request.r(i3705[11], i3705[12], 0, i3704, 'm_HorizontalScrollbar')
  request.r(i3705[13], i3705[14], 0, i3704, 'm_VerticalScrollbar')
  i3704.m_HorizontalScrollbarVisibility = i3705[15]
  i3704.m_VerticalScrollbarVisibility = i3705[16]
  i3704.m_HorizontalScrollbarSpacing = i3705[17]
  i3704.m_VerticalScrollbarSpacing = i3705[18]
  i3704.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3705[19], i3704.m_OnValueChanged)
  return i3704
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3707 = data
  i3706.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3707[0], i3706.m_PersistentCalls)
  return i3706
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3709 = data
  i3708.m_ShowMaskGraphic = !!i3709[0]
  return i3708
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'm_HandleRect')
  i3710.m_Direction = i3711[2]
  i3710.m_Value = i3711[3]
  i3710.m_Size = i3711[4]
  i3710.m_NumberOfSteps = i3711[5]
  i3710.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3711[6], i3710.m_OnValueChanged)
  i3710.m_Navigation = request.d('UnityEngine.UI.Navigation', i3711[7], i3710.m_Navigation)
  i3710.m_Transition = i3711[8]
  i3710.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3711[9], i3710.m_Colors)
  i3710.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3711[10], i3710.m_SpriteState)
  i3710.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3711[11], i3710.m_AnimationTriggers)
  i3710.m_Interactable = !!i3711[12]
  request.r(i3711[13], i3711[14], 0, i3710, 'm_TargetGraphic')
  return i3710
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3713 = data
  i3712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3713[0], i3712.m_PersistentCalls)
  return i3712
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i3715 = data
  var i3717 = i3715[0]
  var i3716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i3717[i + 0]));
  }
  i3714.m_Delegates = i3716
  return i3714
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i3720 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i3721 = data
  i3720.eventID = i3721[0]
  i3720.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i3721[1], i3720.callback)
  return i3720
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i3723 = data
  i3722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3723[0], i3722.m_PersistentCalls)
  return i3722
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'nameLabel')
  request.r(i3725[2], i3725[3], 0, i3724, 'valueLabel')
  i3724.colorDefault = new pc.Color(i3725[4], i3725[5], i3725[6], i3725[7])
  i3724.colorSelected = new pc.Color(i3725[8], i3725[9], i3725[10], i3725[11])
  return i3724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i3726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'nameLabel')
  request.r(i3727[2], i3727[3], 0, i3726, 'valueToggle')
  request.r(i3727[4], i3727[5], 0, i3726, 'checkmarkImage')
  i3726.colorDefault = new pc.Color(i3727[6], i3727[7], i3727[8], i3727[9])
  i3726.colorSelected = new pc.Color(i3727[10], i3727[11], i3727[12], i3727[13])
  return i3726
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i3728 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i3729 = data
  i3728.toggleTransition = i3729[0]
  request.r(i3729[1], i3729[2], 0, i3728, 'graphic')
  i3728.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3729[3], i3728.onValueChanged)
  request.r(i3729[4], i3729[5], 0, i3728, 'm_Group')
  i3728.m_IsOn = !!i3729[6]
  i3728.m_Navigation = request.d('UnityEngine.UI.Navigation', i3729[7], i3728.m_Navigation)
  i3728.m_Transition = i3729[8]
  i3728.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3729[9], i3728.m_Colors)
  i3728.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3729[10], i3728.m_SpriteState)
  i3728.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3729[11], i3728.m_AnimationTriggers)
  i3728.m_Interactable = !!i3729[12]
  request.r(i3729[13], i3729[14], 0, i3728, 'm_TargetGraphic')
  return i3728
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i3730 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i3731 = data
  i3730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3731[0], i3730.m_PersistentCalls)
  return i3730
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'nameLabel')
  request.r(i3733[2], i3733[3], 0, i3732, 'valueLabel')
  i3732.colorDefault = new pc.Color(i3733[4], i3733[5], i3733[6], i3733[7])
  i3732.colorSelected = new pc.Color(i3733[8], i3733[9], i3733[10], i3733[11])
  return i3732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i3735 = data
  request.r(i3735[0], i3735[1], 0, i3734, 'nameLabel')
  request.r(i3735[2], i3735[3], 0, i3734, 'valueLabel')
  i3734.colorDefault = new pc.Color(i3735[4], i3735[5], i3735[6], i3735[7])
  i3734.colorSelected = new pc.Color(i3735[8], i3735[9], i3735[10], i3735[11])
  return i3734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'nameLabel')
  request.r(i3737[2], i3737[3], 0, i3736, 'valueLabel')
  i3736.colorDefault = new pc.Color(i3737[4], i3737[5], i3737[6], i3737[7])
  i3736.colorSelected = new pc.Color(i3737[8], i3737[9], i3737[10], i3737[11])
  return i3736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i3738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'nextButtonText')
  request.r(i3739[2], i3739[3], 0, i3738, 'previousButtonText')
  request.r(i3739[4], i3739[5], 0, i3738, 'nameLabel')
  request.r(i3739[6], i3739[7], 0, i3738, 'valueLabel')
  i3738.colorDefault = new pc.Color(i3739[8], i3739[9], i3739[10], i3739[11])
  i3738.colorSelected = new pc.Color(i3739[12], i3739[13], i3739[14], i3739[15])
  return i3738
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i3740 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'nameLabel')
  i3740.colorDefault = new pc.Color(i3741[2], i3741[3], i3741[4], i3741[5])
  i3740.colorSelected = new pc.Color(i3741[6], i3741[7], i3741[8], i3741[9])
  return i3740
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i3742 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i3743 = data
  request.r(i3743[0], i3743[1], 0, i3742, 'nameLabel')
  request.r(i3743[2], i3743[3], 0, i3742, 'valueToggle')
  i3742.colorDefault = new pc.Color(i3743[4], i3743[5], i3743[6], i3743[7])
  i3742.colorSelected = new pc.Color(i3743[8], i3743[9], i3743[10], i3743[11])
  return i3742
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i3744 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i3745 = data
  i3744.toggleTransition = i3745[0]
  request.r(i3745[1], i3745[2], 0, i3744, 'graphic')
  i3744.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i3745[3], i3744.onValueChanged)
  request.r(i3745[4], i3745[5], 0, i3744, 'content')
  request.r(i3745[6], i3745[7], 0, i3744, 'arrowOpened')
  request.r(i3745[8], i3745[9], 0, i3744, 'arrowClosed')
  request.r(i3745[10], i3745[11], 0, i3744, 'm_Group')
  i3744.m_IsOn = !!i3745[12]
  i3744.m_Navigation = request.d('UnityEngine.UI.Navigation', i3745[13], i3744.m_Navigation)
  i3744.m_Transition = i3745[14]
  i3744.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3745[15], i3744.m_Colors)
  i3744.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3745[16], i3744.m_SpriteState)
  i3744.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3745[17], i3744.m_AnimationTriggers)
  i3744.m_Interactable = !!i3745[18]
  request.r(i3745[19], i3745[20], 0, i3744, 'm_TargetGraphic')
  return i3744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i3746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'nameLabel')
  request.r(i3747[2], i3747[3], 0, i3746, 'valueToggle')
  request.r(i3747[4], i3747[5], 0, i3746, 'colorImage')
  request.r(i3747[6], i3747[7], 0, i3746, 'fieldR')
  request.r(i3747[8], i3747[9], 0, i3746, 'fieldG')
  request.r(i3747[10], i3747[11], 0, i3746, 'fieldB')
  request.r(i3747[12], i3747[13], 0, i3746, 'fieldA')
  i3746.colorDefault = new pc.Color(i3747[14], i3747[15], i3747[16], i3747[17])
  i3746.colorSelected = new pc.Color(i3747[18], i3747[19], i3747[20], i3747[21])
  return i3746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i3748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i3749 = data
  request.r(i3749[0], i3749[1], 0, i3748, 'nameLabel')
  request.r(i3749[2], i3749[3], 0, i3748, 'valueLabel')
  i3748.colorDefault = new pc.Color(i3749[4], i3749[5], i3749[6], i3749[7])
  i3748.colorSelected = new pc.Color(i3749[8], i3749[9], i3749[10], i3749[11])
  return i3748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i3750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i3751 = data
  request.r(i3751[0], i3751[1], 0, i3750, 'nameLabel')
  request.r(i3751[2], i3751[3], 0, i3750, 'valueToggle')
  request.r(i3751[4], i3751[5], 0, i3750, 'fieldX')
  request.r(i3751[6], i3751[7], 0, i3750, 'fieldY')
  i3750.colorDefault = new pc.Color(i3751[8], i3751[9], i3751[10], i3751[11])
  i3750.colorSelected = new pc.Color(i3751[12], i3751[13], i3751[14], i3751[15])
  return i3750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i3752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'nameLabel')
  request.r(i3753[2], i3753[3], 0, i3752, 'valueToggle')
  request.r(i3753[4], i3753[5], 0, i3752, 'fieldX')
  request.r(i3753[6], i3753[7], 0, i3752, 'fieldY')
  request.r(i3753[8], i3753[9], 0, i3752, 'fieldZ')
  i3752.colorDefault = new pc.Color(i3753[10], i3753[11], i3753[12], i3753[13])
  i3752.colorSelected = new pc.Color(i3753[14], i3753[15], i3753[16], i3753[17])
  return i3752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i3754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i3755 = data
  request.r(i3755[0], i3755[1], 0, i3754, 'nameLabel')
  request.r(i3755[2], i3755[3], 0, i3754, 'valueToggle')
  request.r(i3755[4], i3755[5], 0, i3754, 'fieldX')
  request.r(i3755[6], i3755[7], 0, i3754, 'fieldY')
  request.r(i3755[8], i3755[9], 0, i3754, 'fieldZ')
  request.r(i3755[10], i3755[11], 0, i3754, 'fieldW')
  i3754.colorDefault = new pc.Color(i3755[12], i3755[13], i3755[14], i3755[15])
  i3754.colorSelected = new pc.Color(i3755[16], i3755[17], i3755[18], i3755[19])
  return i3754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i3757 = data
  i3756.colorDefault = new pc.Color(i3757[0], i3757[1], i3757[2], i3757[3])
  i3756.colorSelected = new pc.Color(i3757[4], i3757[5], i3757[6], i3757[7])
  return i3756
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3759 = data
  i3758.m_Spacing = i3759[0]
  i3758.m_ChildForceExpandWidth = !!i3759[1]
  i3758.m_ChildForceExpandHeight = !!i3759[2]
  i3758.m_ChildControlWidth = !!i3759[3]
  i3758.m_ChildControlHeight = !!i3759[4]
  i3758.m_ChildScaleWidth = !!i3759[5]
  i3758.m_ChildScaleHeight = !!i3759[6]
  i3758.m_ReverseArrangement = !!i3759[7]
  i3758.m_Padding = UnityEngine.RectOffset.FromPaddings(i3759[8], i3759[9], i3759[10], i3759[11])
  i3758.m_ChildAlignment = i3759[12]
  return i3758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i3760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i3761 = data
  i3760.colorDefault = new pc.Color(i3761[0], i3761[1], i3761[2], i3761[3])
  i3760.colorSelected = new pc.Color(i3761[4], i3761[5], i3761[6], i3761[7])
  return i3760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'nameLabel')
  request.r(i3763[2], i3763[3], 0, i3762, 'header')
  i3762.colorDefault = new pc.Color(i3763[4], i3763[5], i3763[6], i3763[7])
  i3762.colorSelected = new pc.Color(i3763[8], i3763[9], i3763[10], i3763[11])
  return i3762
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i3765 = data
  request.r(i3765[0], i3765[1], 0, i3764, 'nameLabel')
  request.r(i3765[2], i3765[3], 0, i3764, 'valueToggle')
  var i3767 = i3765[4]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i3767.length; i += 2) {
  request.r(i3767[i + 0], i3767[i + 1], 1, i3766, '')
  }
  i3764.toggles = i3766
  i3764.colorDefault = new pc.Color(i3765[5], i3765[6], i3765[7], i3765[8])
  i3764.colorSelected = new pc.Color(i3765[9], i3765[10], i3765[11], i3765[12])
  return i3764
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i3770 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i3771 = data
  request.r(i3771[0], i3771[1], 0, i3770, 'nameLabel')
  request.r(i3771[2], i3771[3], 0, i3770, 'valueToggle')
  request.r(i3771[4], i3771[5], 0, i3770, 'checkmarkImage')
  i3770.colorDefault = new pc.Color(i3771[6], i3771[7], i3771[8], i3771[9])
  i3770.colorSelected = new pc.Color(i3771[10], i3771[11], i3771[12], i3771[13])
  return i3770
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i3773 = data
  request.r(i3773[0], i3773[1], 0, i3772, 'nameLabel')
  request.r(i3773[2], i3773[3], 0, i3772, 'valueToggle')
  request.r(i3773[4], i3773[5], 0, i3772, 'checkmarkImage')
  i3772.colorDefault = new pc.Color(i3773[6], i3773[7], i3773[8], i3773[9])
  i3772.colorSelected = new pc.Color(i3773[10], i3773[11], i3773[12], i3773[13])
  return i3772
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'nextButtonText')
  request.r(i3775[2], i3775[3], 0, i3774, 'previousButtonText')
  request.r(i3775[4], i3775[5], 0, i3774, 'nameLabel')
  request.r(i3775[6], i3775[7], 0, i3774, 'valueLabel')
  i3774.colorDefault = new pc.Color(i3775[8], i3775[9], i3775[10], i3775[11])
  i3774.colorSelected = new pc.Color(i3775[12], i3775[13], i3775[14], i3775[15])
  return i3774
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i3776 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i3777 = data
  request.r(i3777[0], i3777[1], 0, i3776, 'nameLabel')
  request.r(i3777[2], i3777[3], 0, i3776, 'valueToggle')
  i3776.colorDefault = new pc.Color(i3777[4], i3777[5], i3777[6], i3777[7])
  i3776.colorSelected = new pc.Color(i3777[8], i3777[9], i3777[10], i3777[11])
  return i3776
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i3778 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'nameLabel')
  i3778.colorDefault = new pc.Color(i3779[2], i3779[3], i3779[4], i3779[5])
  i3778.colorSelected = new pc.Color(i3779[6], i3779[7], i3779[8], i3779[9])
  return i3778
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'nameLabel')
  request.r(i3781[2], i3781[3], 0, i3780, 'valueLabel')
  request.r(i3781[4], i3781[5], 0, i3780, 'progressBarRect')
  i3780.colorDefault = new pc.Color(i3781[6], i3781[7], i3781[8], i3781[9])
  i3780.colorSelected = new pc.Color(i3781[10], i3781[11], i3781[12], i3781[13])
  return i3780
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i3782 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i3783 = data
  request.r(i3783[0], i3783[1], 0, i3782, 'nameLabel')
  request.r(i3783[2], i3783[3], 0, i3782, 'valueLabel')
  i3782.colorDefault = new pc.Color(i3783[4], i3783[5], i3783[6], i3783[7])
  i3782.colorSelected = new pc.Color(i3783[8], i3783[9], i3783[10], i3783[11])
  return i3782
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i3784 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i3785 = data
  request.r(i3785[0], i3785[1], 0, i3784, 'nameLabel')
  request.r(i3785[2], i3785[3], 0, i3784, 'valueLabel')
  i3784.colorDefault = new pc.Color(i3785[4], i3785[5], i3785[6], i3785[7])
  i3784.colorSelected = new pc.Color(i3785[8], i3785[9], i3785[10], i3785[11])
  return i3784
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i3786 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i3787 = data
  request.r(i3787[0], i3787[1], 0, i3786, 'nextButtonText')
  request.r(i3787[2], i3787[3], 0, i3786, 'previousButtonText')
  request.r(i3787[4], i3787[5], 0, i3786, 'nameLabel')
  request.r(i3787[6], i3787[7], 0, i3786, 'valueLabel')
  i3786.colorDefault = new pc.Color(i3787[8], i3787[9], i3787[10], i3787[11])
  i3786.colorSelected = new pc.Color(i3787[12], i3787[13], i3787[14], i3787[15])
  return i3786
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i3788 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i3789 = data
  request.r(i3789[0], i3789[1], 0, i3788, 'nextButtonText')
  request.r(i3789[2], i3789[3], 0, i3788, 'previousButtonText')
  request.r(i3789[4], i3789[5], 0, i3788, 'nameLabel')
  request.r(i3789[6], i3789[7], 0, i3788, 'valueLabel')
  i3788.colorDefault = new pc.Color(i3789[8], i3789[9], i3789[10], i3789[11])
  i3788.colorSelected = new pc.Color(i3789[12], i3789[13], i3789[14], i3789[15])
  return i3788
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i3790 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'panel')
  request.r(i3791[2], i3791[3], 0, i3790, 'valuePrefab')
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i3793 = data
  i3792.AdditionalLightsPerObjectLimit = i3793[0]
  i3792.AdditionalLightsRenderingMode = i3793[1]
  i3792.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3793[2], i3792.LightRenderingMode)
  i3792.ColorGradingLutSize = i3793[3]
  i3792.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i3793[4], i3792.ColorGradingMode)
  i3792.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3793[5], i3792.MainLightRenderingMode)
  i3792.MainLightRenderingModeValue = i3793[6]
  i3792.SupportsMainLightShadows = !!i3793[7]
  i3792.MixedLightingSupported = !!i3793[8]
  i3792.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i3793[9], i3792.MsaaQuality)
  i3792.MSAA = i3793[10]
  i3792.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i3793[11], i3792.OpaqueDownsampling)
  i3792.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i3793[12], i3792.MainLightShadowmapResolution)
  i3792.MainLightShadowmapResolutionValue = i3793[13]
  i3792.SupportsSoftShadows = !!i3793[14]
  i3792.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i3793[15], i3792.SoftShadowQuality)
  i3792.SoftShadowQualityValue = i3793[16]
  i3792.ShadowDistance = i3793[17]
  i3792.ShadowCascadeCount = i3793[18]
  i3792.Cascade2Split = i3793[19]
  i3792.Cascade3Split = new pc.Vec2( i3793[20], i3793[21] )
  i3792.Cascade4Split = new pc.Vec3( i3793[22], i3793[23], i3793[24] )
  i3792.CascadeBorder = i3793[25]
  i3792.ShadowDepthBias = i3793[26]
  i3792.ShadowNormalBias = i3793[27]
  i3792.RenderScale = i3793[28]
  i3792.RequireDepthTexture = !!i3793[29]
  i3792.RequireOpaqueTexture = !!i3793[30]
  i3792.SupportsHDR = !!i3793[31]
  i3792.SupportsTerrainHoles = !!i3793[32]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i3795 = data
  i3794.Disabled = i3795[0]
  i3794.PerVertex = i3795[1]
  i3794.PerPixel = i3795[2]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i3797 = data
  i3796.LowDynamicRange = i3797[0]
  i3796.HighDynamicRange = i3797[1]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i3799 = data
  i3798.Disabled = i3799[0]
  i3798._2x = i3799[1]
  i3798._4x = i3799[2]
  i3798._8x = i3799[3]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i3801 = data
  i3800.None = i3801[0]
  i3800._2xBilinear = i3801[1]
  i3800._4xBox = i3801[2]
  i3800._4xBilinear = i3801[3]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i3803 = data
  i3802._256 = i3803[0]
  i3802._512 = i3803[1]
  i3802._1024 = i3803[2]
  i3802._2048 = i3803[3]
  i3802._4096 = i3803[4]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i3805 = data
  i3804.UsePipelineSettings = i3805[0]
  i3804.Low = i3805[1]
  i3804.Medium = i3805[2]
  i3804.High = i3805[3]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3807 = data
  var i3809 = i3807[0]
  var i3808 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3809[i + 0]));
  }
  i3806.ShaderCompilationErrors = i3808
  i3806.name = i3807[1]
  i3806.guid = i3807[2]
  var i3811 = i3807[3]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( i3811[i + 0] );
  }
  i3806.shaderDefinedKeywords = i3810
  var i3813 = i3807[4]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3813[i + 0]) );
  }
  i3806.passes = i3812
  var i3815 = i3807[5]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3815[i + 0]) );
  }
  i3806.usePasses = i3814
  var i3817 = i3807[6]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3817[i + 0]) );
  }
  i3806.defaultParameterValues = i3816
  request.r(i3807[7], i3807[8], 0, i3806, 'unityFallbackShader')
  i3806.readDepth = !!i3807[9]
  i3806.isCreatedByShaderGraph = !!i3807[10]
  i3806.compiled = !!i3807[11]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3821 = data
  i3820.shaderName = i3821[0]
  i3820.errorMessage = i3821[1]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3826 = root || new pc.UnityShaderPass()
  var i3827 = data
  i3826.id = i3827[0]
  i3826.subShaderIndex = i3827[1]
  i3826.name = i3827[2]
  i3826.passType = i3827[3]
  i3826.grabPassTextureName = i3827[4]
  i3826.usePass = !!i3827[5]
  i3826.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[6], i3826.zTest)
  i3826.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[7], i3826.zWrite)
  i3826.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[8], i3826.culling)
  i3826.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3827[9], i3826.blending)
  i3826.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3827[10], i3826.alphaBlending)
  i3826.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[11], i3826.colorWriteMask)
  i3826.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[12], i3826.offsetUnits)
  i3826.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[13], i3826.offsetFactor)
  i3826.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[14], i3826.stencilRef)
  i3826.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[15], i3826.stencilReadMask)
  i3826.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3827[16], i3826.stencilWriteMask)
  i3826.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3827[17], i3826.stencilOp)
  i3826.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3827[18], i3826.stencilOpFront)
  i3826.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3827[19], i3826.stencilOpBack)
  var i3829 = i3827[20]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 1) {
    i3828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3829[i + 0]) );
  }
  i3826.tags = i3828
  var i3831 = i3827[21]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( i3831[i + 0] );
  }
  i3826.passDefinedKeywords = i3830
  var i3833 = i3827[22]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3833[i + 0]) );
  }
  i3826.passDefinedKeywordGroups = i3832
  var i3835 = i3827[23]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3835[i + 0]) );
  }
  i3826.variants = i3834
  var i3837 = i3827[24]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3837[i + 0]) );
  }
  i3826.excludedVariants = i3836
  i3826.hasDepthReader = !!i3827[25]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3839 = data
  i3838.val = i3839[0]
  i3838.name = i3839[1]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3841 = data
  i3840.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3841[0], i3840.src)
  i3840.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3841[1], i3840.dst)
  i3840.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3841[2], i3840.op)
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3843 = data
  i3842.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3843[0], i3842.pass)
  i3842.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3843[1], i3842.fail)
  i3842.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3843[2], i3842.zFail)
  i3842.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3843[3], i3842.comp)
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3847 = data
  i3846.name = i3847[0]
  i3846.value = i3847[1]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3851 = data
  var i3853 = i3851[0]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( i3853[i + 0] );
  }
  i3850.keywords = i3852
  i3850.hasDiscard = !!i3851[1]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3857 = data
  i3856.passId = i3857[0]
  i3856.subShaderIndex = i3857[1]
  var i3859 = i3857[2]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( i3859[i + 0] );
  }
  i3856.keywords = i3858
  i3856.vertexProgram = i3857[3]
  i3856.fragmentProgram = i3857[4]
  i3856.exportedForWebGl2 = !!i3857[5]
  i3856.readDepth = !!i3857[6]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3863 = data
  request.r(i3863[0], i3863[1], 0, i3862, 'shader')
  i3862.pass = i3863[2]
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3867 = data
  i3866.name = i3867[0]
  i3866.type = i3867[1]
  i3866.value = new pc.Vec4( i3867[2], i3867[3], i3867[4], i3867[5] )
  i3866.textureValue = i3867[6]
  i3866.shaderPropertyFlag = i3867[7]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3869 = data
  i3868.name = i3869[0]
  request.r(i3869[1], i3869[2], 0, i3868, 'texture')
  i3868.aabb = i3869[3]
  i3868.vertices = i3869[4]
  i3868.triangles = i3869[5]
  i3868.textureRect = UnityEngine.Rect.MinMaxRect(i3869[6], i3869[7], i3869[8], i3869[9])
  i3868.packedRect = UnityEngine.Rect.MinMaxRect(i3869[10], i3869[11], i3869[12], i3869[13])
  i3868.border = new pc.Vec4( i3869[14], i3869[15], i3869[16], i3869[17] )
  i3868.transparency = i3869[18]
  i3868.bounds = i3869[19]
  i3868.pixelsPerUnit = i3869[20]
  i3868.textureWidth = i3869[21]
  i3868.textureHeight = i3869[22]
  i3868.nativeSize = new pc.Vec2( i3869[23], i3869[24] )
  i3868.pivot = new pc.Vec2( i3869[25], i3869[26] )
  i3868.textureRectOffset = new pc.Vec2( i3869[27], i3869[28] )
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3871 = data
  i3870.name = i3871[0]
  i3870.ascent = i3871[1]
  i3870.originalLineHeight = i3871[2]
  i3870.fontSize = i3871[3]
  var i3873 = i3871[4]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3873[i + 0]) );
  }
  i3870.characterInfo = i3872
  request.r(i3871[5], i3871[6], 0, i3870, 'texture')
  i3870.originalFontSize = i3871[7]
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3877 = data
  i3876.index = i3877[0]
  i3876.advance = i3877[1]
  i3876.bearing = i3877[2]
  i3876.glyphWidth = i3877[3]
  i3876.glyphHeight = i3877[4]
  i3876.minX = i3877[5]
  i3876.maxX = i3877[6]
  i3876.minY = i3877[7]
  i3876.maxY = i3877[8]
  i3876.uvBottomLeftX = i3877[9]
  i3876.uvBottomLeftY = i3877[10]
  i3876.uvBottomRightX = i3877[11]
  i3876.uvBottomRightY = i3877[12]
  i3876.uvTopLeftX = i3877[13]
  i3876.uvTopLeftY = i3877[14]
  i3876.uvTopRightX = i3877[15]
  i3876.uvTopRightY = i3877[16]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3879 = data
  i3878.name = i3879[0]
  i3878.bytes64 = i3879[1]
  i3878.data = i3879[2]
  return i3878
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3880 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3881 = data
  i3880.hashCode = i3881[0]
  request.r(i3881[1], i3881[2], 0, i3880, 'material')
  i3880.materialHashCode = i3881[3]
  request.r(i3881[4], i3881[5], 0, i3880, 'atlas')
  i3880.normalStyle = i3881[6]
  i3880.normalSpacingOffset = i3881[7]
  i3880.boldStyle = i3881[8]
  i3880.boldSpacing = i3881[9]
  i3880.italicStyle = i3881[10]
  i3880.tabSize = i3881[11]
  i3880.m_Version = i3881[12]
  i3880.m_SourceFontFileGUID = i3881[13]
  request.r(i3881[14], i3881[15], 0, i3880, 'm_SourceFontFile_EditorRef')
  request.r(i3881[16], i3881[17], 0, i3880, 'm_SourceFontFile')
  i3880.m_AtlasPopulationMode = i3881[18]
  i3880.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3881[19], i3880.m_FaceInfo)
  var i3883 = i3881[20]
  var i3882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.add(request.d('UnityEngine.TextCore.Glyph', i3883[i + 0]));
  }
  i3880.m_GlyphTable = i3882
  var i3885 = i3881[21]
  var i3884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.add(request.d('TMPro.TMP_Character', i3885[i + 0]));
  }
  i3880.m_CharacterTable = i3884
  var i3887 = i3881[22]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 2) {
  request.r(i3887[i + 0], i3887[i + 1], 2, i3886, '')
  }
  i3880.m_AtlasTextures = i3886
  i3880.m_AtlasTextureIndex = i3881[23]
  i3880.m_IsMultiAtlasTexturesEnabled = !!i3881[24]
  i3880.m_ClearDynamicDataOnBuild = !!i3881[25]
  var i3889 = i3881[26]
  var i3888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.add(request.d('UnityEngine.TextCore.GlyphRect', i3889[i + 0]));
  }
  i3880.m_UsedGlyphRects = i3888
  var i3891 = i3881[27]
  var i3890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.add(request.d('UnityEngine.TextCore.GlyphRect', i3891[i + 0]));
  }
  i3880.m_FreeGlyphRects = i3890
  i3880.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3881[28], i3880.m_fontInfo)
  i3880.m_AtlasWidth = i3881[29]
  i3880.m_AtlasHeight = i3881[30]
  i3880.m_AtlasPadding = i3881[31]
  i3880.m_AtlasRenderMode = i3881[32]
  var i3893 = i3881[33]
  var i3892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.add(request.d('TMPro.TMP_Glyph', i3893[i + 0]));
  }
  i3880.m_glyphInfoList = i3892
  i3880.m_KerningTable = request.d('TMPro.KerningTable', i3881[34], i3880.m_KerningTable)
  i3880.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3881[35], i3880.m_FontFeatureTable)
  var i3895 = i3881[36]
  var i3894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3895.length; i += 2) {
  request.r(i3895[i + 0], i3895[i + 1], 1, i3894, '')
  }
  i3880.fallbackFontAssets = i3894
  var i3897 = i3881[37]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3897.length; i += 2) {
  request.r(i3897[i + 0], i3897[i + 1], 1, i3896, '')
  }
  i3880.m_FallbackFontAssetTable = i3896
  i3880.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3881[38], i3880.m_CreationSettings)
  var i3899 = i3881[39]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( request.d('TMPro.TMP_FontWeightPair', i3899[i + 0]) );
  }
  i3880.m_FontWeightTable = i3898
  var i3901 = i3881[40]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('TMPro.TMP_FontWeightPair', i3901[i + 0]) );
  }
  i3880.fontWeights = i3900
  return i3880
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3903 = data
  i3902.m_FaceIndex = i3903[0]
  i3902.m_FamilyName = i3903[1]
  i3902.m_StyleName = i3903[2]
  i3902.m_PointSize = i3903[3]
  i3902.m_Scale = i3903[4]
  i3902.m_UnitsPerEM = i3903[5]
  i3902.m_LineHeight = i3903[6]
  i3902.m_AscentLine = i3903[7]
  i3902.m_CapLine = i3903[8]
  i3902.m_MeanLine = i3903[9]
  i3902.m_Baseline = i3903[10]
  i3902.m_DescentLine = i3903[11]
  i3902.m_SuperscriptOffset = i3903[12]
  i3902.m_SuperscriptSize = i3903[13]
  i3902.m_SubscriptOffset = i3903[14]
  i3902.m_SubscriptSize = i3903[15]
  i3902.m_UnderlineOffset = i3903[16]
  i3902.m_UnderlineThickness = i3903[17]
  i3902.m_StrikethroughOffset = i3903[18]
  i3902.m_StrikethroughThickness = i3903[19]
  i3902.m_TabWidth = i3903[20]
  return i3902
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3906 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3907 = data
  i3906.m_Index = i3907[0]
  i3906.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3907[1], i3906.m_Metrics)
  i3906.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3907[2], i3906.m_GlyphRect)
  i3906.m_Scale = i3907[3]
  i3906.m_AtlasIndex = i3907[4]
  i3906.m_ClassDefinitionType = i3907[5]
  return i3906
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3909 = data
  i3908.m_Width = i3909[0]
  i3908.m_Height = i3909[1]
  i3908.m_HorizontalBearingX = i3909[2]
  i3908.m_HorizontalBearingY = i3909[3]
  i3908.m_HorizontalAdvance = i3909[4]
  return i3908
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3911 = data
  i3910.m_X = i3911[0]
  i3910.m_Y = i3911[1]
  i3910.m_Width = i3911[2]
  i3910.m_Height = i3911[3]
  return i3910
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3914 = root || request.c( 'TMPro.TMP_Character' )
  var i3915 = data
  i3914.m_ElementType = i3915[0]
  i3914.m_Unicode = i3915[1]
  i3914.m_GlyphIndex = i3915[2]
  i3914.m_Scale = i3915[3]
  return i3914
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3920 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3921 = data
  i3920.Name = i3921[0]
  i3920.PointSize = i3921[1]
  i3920.Scale = i3921[2]
  i3920.CharacterCount = i3921[3]
  i3920.LineHeight = i3921[4]
  i3920.Baseline = i3921[5]
  i3920.Ascender = i3921[6]
  i3920.CapHeight = i3921[7]
  i3920.Descender = i3921[8]
  i3920.CenterLine = i3921[9]
  i3920.SuperscriptOffset = i3921[10]
  i3920.SubscriptOffset = i3921[11]
  i3920.SubSize = i3921[12]
  i3920.Underline = i3921[13]
  i3920.UnderlineThickness = i3921[14]
  i3920.strikethrough = i3921[15]
  i3920.strikethroughThickness = i3921[16]
  i3920.TabWidth = i3921[17]
  i3920.Padding = i3921[18]
  i3920.AtlasWidth = i3921[19]
  i3920.AtlasHeight = i3921[20]
  return i3920
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3924 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3925 = data
  i3924.id = i3925[0]
  i3924.x = i3925[1]
  i3924.y = i3925[2]
  i3924.width = i3925[3]
  i3924.height = i3925[4]
  i3924.xOffset = i3925[5]
  i3924.yOffset = i3925[6]
  i3924.xAdvance = i3925[7]
  i3924.scale = i3925[8]
  return i3924
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3926 = root || request.c( 'TMPro.KerningTable' )
  var i3927 = data
  var i3929 = i3927[0]
  var i3928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.add(request.d('TMPro.KerningPair', i3929[i + 0]));
  }
  i3926.kerningPairs = i3928
  return i3926
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.KerningPair' )
  var i3933 = data
  i3932.xOffset = i3933[0]
  i3932.m_FirstGlyph = i3933[1]
  i3932.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3933[2], i3932.m_FirstGlyphAdjustments)
  i3932.m_SecondGlyph = i3933[3]
  i3932.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3933[4], i3932.m_SecondGlyphAdjustments)
  i3932.m_IgnoreSpacingAdjustments = !!i3933[5]
  return i3932
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3937[i + 0]));
  }
  i3934.m_GlyphPairAdjustmentRecords = i3936
  return i3934
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3941 = data
  i3940.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3941[0], i3940.m_FirstAdjustmentRecord)
  i3940.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3941[1], i3940.m_SecondAdjustmentRecord)
  i3940.m_FeatureLookupFlags = i3941[2]
  return i3940
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3942 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3943 = data
  i3942.m_GlyphIndex = i3943[0]
  i3942.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3943[1], i3942.m_GlyphValueRecord)
  return i3942
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3944 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3945 = data
  i3944.m_XPlacement = i3945[0]
  i3944.m_YPlacement = i3945[1]
  i3944.m_XAdvance = i3945[2]
  i3944.m_YAdvance = i3945[3]
  return i3944
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3948 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3949 = data
  i3948.sourceFontFileName = i3949[0]
  i3948.sourceFontFileGUID = i3949[1]
  i3948.pointSizeSamplingMode = i3949[2]
  i3948.pointSize = i3949[3]
  i3948.padding = i3949[4]
  i3948.packingMode = i3949[5]
  i3948.atlasWidth = i3949[6]
  i3948.atlasHeight = i3949[7]
  i3948.characterSetSelectionMode = i3949[8]
  i3948.characterSequence = i3949[9]
  i3948.referencedFontAssetGUID = i3949[10]
  i3948.referencedTextAssetGUID = i3949[11]
  i3948.fontStyle = i3949[12]
  i3948.fontStyleModifier = i3949[13]
  i3948.renderMode = i3949[14]
  i3948.includeFontFeatures = !!i3949[15]
  return i3948
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3952 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3953 = data
  request.r(i3953[0], i3953[1], 0, i3952, 'regularTypeface')
  request.r(i3953[2], i3953[3], 0, i3952, 'italicTypeface')
  return i3952
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i3954 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i3955 = data
  var i3957 = i3955[0]
  var i3956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i3957.length; i += 2) {
  request.r(i3957[i + 0], i3957[i + 1], 1, i3956, '')
  }
  i3954.components = i3956
  return i3954
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i3961 = data
  i3960.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i3961[0], i3960.mode)
  i3960.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i3961[1], i3960.neutralHDRRangeReductionMode)
  i3960.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i3961[2], i3960.acesPreset)
  i3960.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3961[3], i3960.hueShiftAmount)
  i3960.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i3961[4], i3960.detectPaperWhite)
  i3960.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3961[5], i3960.paperWhite)
  i3960.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i3961[6], i3960.detectBrightnessLimits)
  i3960.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3961[7], i3960.minNits)
  i3960.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3961[8], i3960.maxNits)
  i3960.active = !!i3961[9]
  return i3960
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i3963 = data
  i3962.m_Value = i3963[0]
  i3962.m_OverrideState = !!i3963[1]
  return i3962
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i3965 = data
  i3964.m_Value = i3965[0]
  i3964.m_OverrideState = !!i3965[1]
  return i3964
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i3966 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i3967 = data
  i3966.m_Value = i3967[0]
  i3966.m_OverrideState = !!i3967[1]
  return i3966
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i3969 = data
  i3968.m_Value = i3969[0]
  i3968.m_OverrideState = !!i3969[1]
  return i3968
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i3970 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i3971 = data
  i3970.m_Value = !!i3971[0]
  i3970.m_OverrideState = !!i3971[1]
  return i3970
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i3972 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i3973 = data
  i3972.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3973[0], i3972.skipIterations)
  i3972.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i3973[1], i3972.threshold)
  i3972.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3973[2], i3972.intensity)
  i3972.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3973[3], i3972.scatter)
  i3972.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i3973[4], i3972.clamp)
  i3972.tint = request.d('UnityEngine.Rendering.ColorParameter', i3973[5], i3972.tint)
  i3972.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i3973[6], i3972.highQualityFiltering)
  i3972.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i3973[7], i3972.downscale)
  i3972.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3973[8], i3972.maxIterations)
  i3972.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i3973[9], i3972.dirtTexture)
  i3972.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3973[10], i3972.dirtIntensity)
  i3972.active = !!i3973[11]
  return i3972
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i3974 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i3975 = data
  i3974.m_Value = i3975[0]
  i3974.m_OverrideState = !!i3975[1]
  return i3974
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i3976 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i3977 = data
  i3976.m_Value = i3977[0]
  i3976.m_OverrideState = !!i3977[1]
  return i3976
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i3978 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i3979 = data
  i3978.m_Value = new pc.Color(i3979[0], i3979[1], i3979[2], i3979[3])
  i3978.m_OverrideState = !!i3979[4]
  return i3978
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i3980 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i3981 = data
  i3980.m_Value = i3981[0]
  i3980.m_OverrideState = !!i3981[1]
  return i3980
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i3982 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i3983 = data
  i3982.dimension = i3983[0]
  request.r(i3983[1], i3983[2], 0, i3982, 'm_Value')
  i3982.m_OverrideState = !!i3983[3]
  return i3982
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i3984 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i3985 = data
  i3984.color = request.d('UnityEngine.Rendering.ColorParameter', i3985[0], i3984.color)
  i3984.center = request.d('UnityEngine.Rendering.Vector2Parameter', i3985[1], i3984.center)
  i3984.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3985[2], i3984.intensity)
  i3984.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3985[3], i3984.smoothness)
  i3984.rounded = request.d('UnityEngine.Rendering.BoolParameter', i3985[4], i3984.rounded)
  i3984.active = !!i3985[5]
  return i3984
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i3986 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i3987 = data
  i3986.m_Value = new pc.Vec2( i3987[0], i3987[1] )
  i3986.m_OverrideState = !!i3987[2]
  return i3986
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3989 = data
  i3988.useSafeMode = !!i3989[0]
  i3988.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3989[1], i3988.safeModeOptions)
  i3988.timeScale = i3989[2]
  i3988.unscaledTimeScale = i3989[3]
  i3988.useSmoothDeltaTime = !!i3989[4]
  i3988.maxSmoothUnscaledTime = i3989[5]
  i3988.rewindCallbackMode = i3989[6]
  i3988.showUnityEditorReport = !!i3989[7]
  i3988.logBehaviour = i3989[8]
  i3988.drawGizmos = !!i3989[9]
  i3988.defaultRecyclable = !!i3989[10]
  i3988.defaultAutoPlay = i3989[11]
  i3988.defaultUpdateType = i3989[12]
  i3988.defaultTimeScaleIndependent = !!i3989[13]
  i3988.defaultEaseType = i3989[14]
  i3988.defaultEaseOvershootOrAmplitude = i3989[15]
  i3988.defaultEasePeriod = i3989[16]
  i3988.defaultAutoKill = !!i3989[17]
  i3988.defaultLoopType = i3989[18]
  i3988.debugMode = !!i3989[19]
  i3988.debugStoreTargetId = !!i3989[20]
  i3988.showPreviewPanel = !!i3989[21]
  i3988.storeSettingsLocation = i3989[22]
  i3988.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3989[23], i3988.modules)
  i3988.createASMDEF = !!i3989[24]
  i3988.showPlayingTweens = !!i3989[25]
  i3988.showPausedTweens = !!i3989[26]
  return i3988
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3991 = data
  i3990.logBehaviour = i3991[0]
  i3990.nestedTweenFailureBehaviour = i3991[1]
  return i3990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3993 = data
  i3992.showPanel = !!i3993[0]
  i3992.audioEnabled = !!i3993[1]
  i3992.physicsEnabled = !!i3993[2]
  i3992.physics2DEnabled = !!i3993[3]
  i3992.spriteEnabled = !!i3993[4]
  i3992.uiEnabled = !!i3993[5]
  i3992.textMeshProEnabled = !!i3993[6]
  i3992.tk2DEnabled = !!i3993[7]
  i3992.deAudioEnabled = !!i3993[8]
  i3992.deUnityExtendedEnabled = !!i3993[9]
  i3992.epoOutlineEnabled = !!i3993[10]
  return i3992
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3994 = root || request.c( 'TMPro.TMP_Settings' )
  var i3995 = data
  i3994.m_enableWordWrapping = !!i3995[0]
  i3994.m_enableKerning = !!i3995[1]
  i3994.m_enableExtraPadding = !!i3995[2]
  i3994.m_enableTintAllSprites = !!i3995[3]
  i3994.m_enableParseEscapeCharacters = !!i3995[4]
  i3994.m_EnableRaycastTarget = !!i3995[5]
  i3994.m_GetFontFeaturesAtRuntime = !!i3995[6]
  i3994.m_missingGlyphCharacter = i3995[7]
  i3994.m_warningsDisabled = !!i3995[8]
  request.r(i3995[9], i3995[10], 0, i3994, 'm_defaultFontAsset')
  i3994.m_defaultFontAssetPath = i3995[11]
  i3994.m_defaultFontSize = i3995[12]
  i3994.m_defaultAutoSizeMinRatio = i3995[13]
  i3994.m_defaultAutoSizeMaxRatio = i3995[14]
  i3994.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3995[15], i3995[16] )
  i3994.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3995[17], i3995[18] )
  i3994.m_autoSizeTextContainer = !!i3995[19]
  i3994.m_IsTextObjectScaleStatic = !!i3995[20]
  var i3997 = i3995[21]
  var i3996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3997.length; i += 2) {
  request.r(i3997[i + 0], i3997[i + 1], 1, i3996, '')
  }
  i3994.m_fallbackFontAssets = i3996
  i3994.m_matchMaterialPreset = !!i3995[22]
  request.r(i3995[23], i3995[24], 0, i3994, 'm_defaultSpriteAsset')
  i3994.m_defaultSpriteAssetPath = i3995[25]
  i3994.m_enableEmojiSupport = !!i3995[26]
  i3994.m_MissingCharacterSpriteUnicode = i3995[27]
  i3994.m_defaultColorGradientPresetsPath = i3995[28]
  request.r(i3995[29], i3995[30], 0, i3994, 'm_defaultStyleSheet')
  i3994.m_StyleSheetsResourcePath = i3995[31]
  request.r(i3995[32], i3995[33], 0, i3994, 'm_leadingCharacters')
  request.r(i3995[34], i3995[35], 0, i3994, 'm_followingCharacters')
  i3994.m_UseModernHangulLineBreakingRules = !!i3995[36]
  return i3994
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3998 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3999 = data
  i3998.hashCode = i3999[0]
  request.r(i3999[1], i3999[2], 0, i3998, 'material')
  i3998.materialHashCode = i3999[3]
  request.r(i3999[4], i3999[5], 0, i3998, 'spriteSheet')
  var i4001 = i3999[6]
  var i4000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.add(request.d('TMPro.TMP_Sprite', i4001[i + 0]));
  }
  i3998.spriteInfoList = i4000
  var i4003 = i3999[7]
  var i4002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4003.length; i += 2) {
  request.r(i4003[i + 0], i4003[i + 1], 1, i4002, '')
  }
  i3998.fallbackSpriteAssets = i4002
  i3998.m_Version = i3999[8]
  i3998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3999[9], i3998.m_FaceInfo)
  var i4005 = i3999[10]
  var i4004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.add(request.d('TMPro.TMP_SpriteCharacter', i4005[i + 0]));
  }
  i3998.m_SpriteCharacterTable = i4004
  var i4007 = i3999[11]
  var i4006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.add(request.d('TMPro.TMP_SpriteGlyph', i4007[i + 0]));
  }
  i3998.m_SpriteGlyphTable = i4006
  return i3998
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4010 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4011 = data
  i4010.name = i4011[0]
  i4010.hashCode = i4011[1]
  i4010.unicode = i4011[2]
  i4010.pivot = new pc.Vec2( i4011[3], i4011[4] )
  request.r(i4011[5], i4011[6], 0, i4010, 'sprite')
  i4010.id = i4011[7]
  i4010.x = i4011[8]
  i4010.y = i4011[9]
  i4010.width = i4011[10]
  i4010.height = i4011[11]
  i4010.xOffset = i4011[12]
  i4010.yOffset = i4011[13]
  i4010.xAdvance = i4011[14]
  i4010.scale = i4011[15]
  return i4010
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4016 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4017 = data
  i4016.m_Name = i4017[0]
  i4016.m_HashCode = i4017[1]
  i4016.m_ElementType = i4017[2]
  i4016.m_Unicode = i4017[3]
  i4016.m_GlyphIndex = i4017[4]
  i4016.m_Scale = i4017[5]
  return i4016
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4020 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4021 = data
  request.r(i4021[0], i4021[1], 0, i4020, 'sprite')
  i4020.m_Index = i4021[2]
  i4020.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4021[3], i4020.m_Metrics)
  i4020.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4021[4], i4020.m_GlyphRect)
  i4020.m_Scale = i4021[5]
  i4020.m_AtlasIndex = i4021[6]
  i4020.m_ClassDefinitionType = i4021[7]
  return i4020
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4022 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4023 = data
  var i4025 = i4023[0]
  var i4024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.add(request.d('TMPro.TMP_Style', i4025[i + 0]));
  }
  i4022.m_StyleList = i4024
  return i4022
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4028 = root || request.c( 'TMPro.TMP_Style' )
  var i4029 = data
  i4028.m_Name = i4029[0]
  i4028.m_HashCode = i4029[1]
  i4028.m_OpeningDefinition = i4029[2]
  i4028.m_ClosingDefinition = i4029[3]
  i4028.m_OpeningTagArray = i4029[4]
  i4028.m_ClosingTagArray = i4029[5]
  i4028.m_OpeningTagUnicodeArray = i4029[6]
  i4028.m_ClosingTagUnicodeArray = i4029[7]
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4031 = data
  var i4033 = i4031[0]
  var i4032 = []
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4033[i + 0]) );
  }
  i4030.files = i4032
  i4030.componentToPrefabIds = i4031[1]
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4037 = data
  i4036.path = i4037[0]
  request.r(i4037[1], i4037[2], 0, i4036, 'unityObject')
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4039 = data
  var i4041 = i4039[0]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4041[i + 0]) );
  }
  i4038.scriptsExecutionOrder = i4040
  var i4043 = i4039[1]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4043[i + 0]) );
  }
  i4038.sortingLayers = i4042
  var i4045 = i4039[2]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4045[i + 0]) );
  }
  i4038.cullingLayers = i4044
  i4038.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4039[3], i4038.timeSettings)
  i4038.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4039[4], i4038.physicsSettings)
  i4038.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4039[5], i4038.physics2DSettings)
  i4038.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4039[6], i4038.qualitySettings)
  i4038.enableRealtimeShadows = !!i4039[7]
  i4038.enableAutoInstancing = !!i4039[8]
  i4038.enableDynamicBatching = !!i4039[9]
  i4038.lightmapEncodingQuality = i4039[10]
  i4038.desiredColorSpace = i4039[11]
  var i4047 = i4039[12]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( i4047[i + 0] );
  }
  i4038.allTags = i4046
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4051 = data
  i4050.name = i4051[0]
  i4050.value = i4051[1]
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4055 = data
  i4054.id = i4055[0]
  i4054.name = i4055[1]
  i4054.value = i4055[2]
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4059 = data
  i4058.id = i4059[0]
  i4058.name = i4059[1]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4061 = data
  i4060.fixedDeltaTime = i4061[0]
  i4060.maximumDeltaTime = i4061[1]
  i4060.timeScale = i4061[2]
  i4060.maximumParticleTimestep = i4061[3]
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4063 = data
  i4062.gravity = new pc.Vec3( i4063[0], i4063[1], i4063[2] )
  i4062.defaultSolverIterations = i4063[3]
  i4062.bounceThreshold = i4063[4]
  i4062.autoSyncTransforms = !!i4063[5]
  i4062.autoSimulation = !!i4063[6]
  var i4065 = i4063[7]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4065[i + 0]) );
  }
  i4062.collisionMatrix = i4064
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4069 = data
  i4068.enabled = !!i4069[0]
  i4068.layerId = i4069[1]
  i4068.otherLayerId = i4069[2]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4071 = data
  request.r(i4071[0], i4071[1], 0, i4070, 'material')
  i4070.gravity = new pc.Vec2( i4071[2], i4071[3] )
  i4070.positionIterations = i4071[4]
  i4070.velocityIterations = i4071[5]
  i4070.velocityThreshold = i4071[6]
  i4070.maxLinearCorrection = i4071[7]
  i4070.maxAngularCorrection = i4071[8]
  i4070.maxTranslationSpeed = i4071[9]
  i4070.maxRotationSpeed = i4071[10]
  i4070.baumgarteScale = i4071[11]
  i4070.baumgarteTOIScale = i4071[12]
  i4070.timeToSleep = i4071[13]
  i4070.linearSleepTolerance = i4071[14]
  i4070.angularSleepTolerance = i4071[15]
  i4070.defaultContactOffset = i4071[16]
  i4070.autoSimulation = !!i4071[17]
  i4070.queriesHitTriggers = !!i4071[18]
  i4070.queriesStartInColliders = !!i4071[19]
  i4070.callbacksOnDisable = !!i4071[20]
  i4070.reuseCollisionCallbacks = !!i4071[21]
  i4070.autoSyncTransforms = !!i4071[22]
  var i4073 = i4071[23]
  var i4072 = []
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4073[i + 0]) );
  }
  i4070.collisionMatrix = i4072
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4077 = data
  i4076.enabled = !!i4077[0]
  i4076.layerId = i4077[1]
  i4076.otherLayerId = i4077[2]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4079 = data
  var i4081 = i4079[0]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4081[i + 0]) );
  }
  i4078.qualityLevels = i4080
  var i4083 = i4079[1]
  var i4082 = []
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.push( i4083[i + 0] );
  }
  i4078.names = i4082
  i4078.shadows = i4079[2]
  i4078.anisotropicFiltering = i4079[3]
  i4078.antiAliasing = i4079[4]
  i4078.lodBias = i4079[5]
  i4078.shadowCascades = i4079[6]
  i4078.shadowDistance = i4079[7]
  i4078.shadowmaskMode = i4079[8]
  i4078.shadowProjection = i4079[9]
  i4078.shadowResolution = i4079[10]
  i4078.softParticles = !!i4079[11]
  i4078.softVegetation = !!i4079[12]
  i4078.activeColorSpace = i4079[13]
  i4078.desiredColorSpace = i4079[14]
  i4078.masterTextureLimit = i4079[15]
  i4078.maxQueuedFrames = i4079[16]
  i4078.particleRaycastBudget = i4079[17]
  i4078.pixelLightCount = i4079[18]
  i4078.realtimeReflectionProbes = !!i4079[19]
  i4078.shadowCascade2Split = i4079[20]
  i4078.shadowCascade4Split = new pc.Vec3( i4079[21], i4079[22], i4079[23] )
  i4078.streamingMipmapsActive = !!i4079[24]
  i4078.vSyncCount = i4079[25]
  i4078.asyncUploadBufferSize = i4079[26]
  i4078.asyncUploadTimeSlice = i4079[27]
  i4078.billboardsFaceCameraPosition = !!i4079[28]
  i4078.shadowNearPlaneOffset = i4079[29]
  i4078.streamingMipmapsMemoryBudget = i4079[30]
  i4078.maximumLODLevel = i4079[31]
  i4078.streamingMipmapsAddAllCameras = !!i4079[32]
  i4078.streamingMipmapsMaxLevelReduction = i4079[33]
  i4078.streamingMipmapsRenderersPerFrame = i4079[34]
  i4078.resolutionScalingFixedDPIFactor = i4079[35]
  i4078.streamingMipmapsMaxFileIORequests = i4079[36]
  i4078.currentQualityLevel = i4079[37]
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4089 = data
  i4088.weight = i4089[0]
  i4088.vertices = i4089[1]
  i4088.normals = i4089[2]
  i4088.tangents = i4089[3]
  return i4088
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4090 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4091 = data
  i4090.xPlacement = i4091[0]
  i4090.yPlacement = i4091[1]
  i4090.xAdvance = i4091[2]
  i4090.yAdvance = i4091[3]
  return i4090
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[102],"103":[25],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[113],"114":[113],"115":[113],"116":[113],"117":[113],"118":[113],"119":[113],"120":[113],"121":[113],"122":[113],"123":[113],"124":[113],"125":[113],"126":[25],"127":[5],"128":[129],"130":[129],"35":[11],"131":[14,12,11],"64":[11],"132":[25],"27":[25],"29":[28],"133":[134],"135":[11],"136":[11],"37":[35],"40":[14,11],"137":[11],"36":[35],"45":[11],"138":[11],"71":[11],"139":[11],"50":[11],"140":[11],"44":[11],"53":[11],"141":[11],"38":[14,11],"142":[11],"52":[11],"49":[11],"143":[11],"48":[14,11],"57":[11],"144":[33],"145":[33],"34":[33],"146":[33],"147":[25],"148":[25],"149":[134],"150":[11],"151":[5,11],"23":[11,14],"152":[11],"153":[14,11],"154":[5],"155":[14,11],"156":[11],"157":[134]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Slot","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","Stuff","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CanvasRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.CanvasGroup","GameManager","GridManager","UnityEngine.GameObject","DragAndDropManager","UIManager","TMPro.TextMeshProUGUI","EffectsManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 06:03:32";

Deserializers.lunaDaysRunning = "2.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "tjddn831-gmail-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1701";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4509";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playable-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "21b7f459-2173-4a6e-8a69-ef0a8c7e36f1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

