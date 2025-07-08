var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSpring' )
  var i489 = data
  i488.spring = i489[0]
  i488.damper = i489[1]
  i488.targetPosition = i489[2]
  return i488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor' )
  var i491 = data
  i490.m_TargetVelocity = i491[0]
  i490.m_Force = i491[1]
  i490.m_FreeSpin = i491[2]
  return i490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointLimits' )
  var i493 = data
  i492.m_Min = i493[0]
  i492.m_Max = i493[1]
  i492.m_Bounciness = i493[2]
  i492.m_BounceMinVelocity = i493[3]
  i492.m_ContactDistance = i493[4]
  i492.minBounce = i493[5]
  i492.maxBounce = i493[6]
  return i492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointDrive' )
  var i495 = data
  i494.m_PositionSpring = i495[0]
  i494.m_PositionDamper = i495[1]
  i494.m_MaximumForce = i495[2]
  i494.m_UseAcceleration = i495[3]
  return i494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i497 = data
  i496.m_Spring = i497[0]
  i496.m_Damper = i497[1]
  return i496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i499 = data
  i498.m_Limit = i499[0]
  i498.m_Bounciness = i499[1]
  i498.m_ContactDistance = i499[2]
  return i498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i501 = data
  i500.m_ExtremumSlip = i501[0]
  i500.m_ExtremumValue = i501[1]
  i500.m_AsymptoteSlip = i501[2]
  i500.m_AsymptoteValue = i501[3]
  i500.m_Stiffness = i501[4]
  return i500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i503 = data
  i502.m_LowerAngle = i503[0]
  i502.m_UpperAngle = i503[1]
  return i502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i505 = data
  i504.m_MotorSpeed = i505[0]
  i504.m_MaximumMotorTorque = i505[1]
  return i504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i507 = data
  i506.m_DampingRatio = i507[0]
  i506.m_Frequency = i507[1]
  i506.m_Angle = i507[2]
  return i506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i509 = data
  i508.m_LowerTranslation = i509[0]
  i508.m_UpperTranslation = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i511 = data
  i510.position = new pc.Vec3( i511[0], i511[1], i511[2] )
  i510.scale = new pc.Vec3( i511[3], i511[4], i511[5] )
  i510.rotation = new pc.Quat(i511[6], i511[7], i511[8], i511[9])
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i513 = data
  i512.name = i513[0]
  i512.tagId = i513[1]
  i512.enabled = !!i513[2]
  i512.isStatic = !!i513[3]
  i512.layer = i513[4]
  return i512
}

Deserializers["Slot"] = function (request, data, root) {
  var i514 = root || request.c( 'Slot' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'placedStuff')
  i514.isCorrectlyFilled = !!i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'sharedMesh')
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'additionalVertexStreams')
  i518.enabled = !!i519[2]
  request.r(i519[3], i519[4], 0, i518, 'sharedMaterial')
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 2, i520, '')
  }
  i518.sharedMaterials = i520
  i518.receiveShadows = !!i519[6]
  i518.shadowCastingMode = i519[7]
  i518.sortingLayerID = i519[8]
  i518.sortingOrder = i519[9]
  i518.lightmapIndex = i519[10]
  i518.lightmapSceneIndex = i519[11]
  i518.lightmapScaleOffset = new pc.Vec4( i519[12], i519[13], i519[14], i519[15] )
  i518.lightProbeUsage = i519[16]
  i518.reflectionProbeUsage = i519[17]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i525 = data
  i524.center = new pc.Vec3( i525[0], i525[1], i525[2] )
  i524.size = new pc.Vec3( i525[3], i525[4], i525[5] )
  i524.enabled = !!i525[6]
  i524.isTrigger = !!i525[7]
  request.r(i525[8], i525[9], 0, i524, 'material')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i527 = data
  i526.name = i527[0]
  i526.halfPrecision = !!i527[1]
  i526.useUInt32IndexFormat = !!i527[2]
  i526.vertexCount = i527[3]
  i526.aabb = i527[4]
  var i529 = i527[5]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( !!i529[i + 0] );
  }
  i526.streams = i528
  i526.vertices = i527[6]
  var i531 = i527[7]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i531[i + 0]) );
  }
  i526.subMeshes = i530
  var i533 = i527[8]
  var i532 = []
  for(var i = 0; i < i533.length; i += 16) {
    i532.push( new pc.Mat4().setData(i533[i + 0], i533[i + 1], i533[i + 2], i533[i + 3],  i533[i + 4], i533[i + 5], i533[i + 6], i533[i + 7],  i533[i + 8], i533[i + 9], i533[i + 10], i533[i + 11],  i533[i + 12], i533[i + 13], i533[i + 14], i533[i + 15]) );
  }
  i526.bindposes = i532
  var i535 = i527[9]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i535[i + 0]) );
  }
  i526.blendShapes = i534
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i541 = data
  i540.triangles = i541[0]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i547 = data
  i546.name = i547[0]
  var i549 = i547[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i549[i + 0]) );
  }
  i546.frames = i548
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i550 = root || new pc.UnityMaterial()
  var i551 = data
  i550.name = i551[0]
  request.r(i551[1], i551[2], 0, i550, 'shader')
  i550.renderQueue = i551[3]
  i550.enableInstancing = !!i551[4]
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i553[i + 0]) );
  }
  i550.floatParameters = i552
  var i555 = i551[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i555[i + 0]) );
  }
  i550.colorParameters = i554
  var i557 = i551[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i557[i + 0]) );
  }
  i550.vectorParameters = i556
  var i559 = i551[8]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i559[i + 0]) );
  }
  i550.textureParameters = i558
  var i561 = i551[9]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i561[i + 0]) );
  }
  i550.materialFlags = i560
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Color(i569[1], i569[2], i569[3], i569[4])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Vec4( i573[1], i573[2], i573[3], i573[4] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'value')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i581 = data
  i580.name = i581[0]
  i580.enabled = !!i581[1]
  return i580
}

Deserializers["Stuff"] = function (request, data, root) {
  var i582 = root || request.c( 'Stuff' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, '_renderer')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i585 = data
  i584.name = i585[0]
  i584.width = i585[1]
  i584.height = i585[2]
  i584.mipmapCount = i585[3]
  i584.anisoLevel = i585[4]
  i584.filterMode = i585[5]
  i584.hdr = !!i585[6]
  i584.format = i585[7]
  i584.wrapMode = i585[8]
  i584.alphaIsTransparency = !!i585[9]
  i584.alphaSource = i585[10]
  i584.graphicsFormat = i585[11]
  i584.sRGBTexture = !!i585[12]
  i584.desiredColorSpace = i585[13]
  i584.wrapU = i585[14]
  i584.wrapV = i585[15]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i587 = data
  i586.name = i587[0]
  i586.atlasId = i587[1]
  i586.mipmapCount = i587[2]
  i586.hdr = !!i587[3]
  i586.size = i587[4]
  i586.anisoLevel = i587[5]
  i586.filterMode = i587[6]
  var i589 = i587[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 4) {
    i588.push( UnityEngine.Rect.MinMaxRect(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3]) );
  }
  i586.rects = i588
  i586.wrapU = i587[8]
  i586.wrapV = i587[9]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i593 = data
  i592.name = i593[0]
  i592.index = i593[1]
  i592.startup = !!i593[2]
  return i592
}

Deserializers["GridManager"] = function (request, data, root) {
  var i594 = root || request.c( 'GridManager' )
  var i595 = data
  i594.verticalOffset = i595[0]
  i594.seed = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'prefabsParent')
  request.r(i595[4], i595[5], 0, i594, 'rowParentPrefab')
  request.r(i595[6], i595[7], 0, i594, 'slotPrefab')
  request.r(i595[8], i595[9], 0, i594, 'stuffPrefab')
  i594.slotScale = i595[10]
  i594.stuffScale = i595[11]
  i594.slotWidth = i595[12]
  i594.slotHeight = i595[13]
  var i597 = i595[14]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('RowData', i597[i + 0]) );
  }
  i594.levelData = i596
  i594.rowMoveDownDuration = i595[15]
  return i594
}

Deserializers["RowData"] = function (request, data, root) {
  var i600 = root || request.c( 'RowData' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'material')
  i600.wrongStuffCount = i601[2]
  return i600
}

Deserializers["DragAndDropManager"] = function (request, data, root) {
  var i602 = root || request.c( 'DragAndDropManager' )
  var i603 = data
  i602.dragZOffset = i603[0]
  i602.slotLayer = UnityEngine.LayerMask.FromIntegerValue( i603[1] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  i604.usePhysicalProperties = !!i605[17]
  i604.focalLength = i605[18]
  i604.sensorSize = new pc.Vec2( i605[19], i605[20] )
  i604.lensShift = new pc.Vec2( i605[21], i605[22] )
  i604.gateFit = i605[23]
  i604.commandBufferCount = i605[24]
  i604.cameraType = i605[25]
  return i604
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i607 = data
  i606.m_RenderShadows = !!i607[0]
  i606.m_RequiresDepthTextureOption = i607[1]
  i606.m_RequiresOpaqueTextureOption = i607[2]
  i606.m_CameraType = i607[3]
  var i609 = i607[4]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.m_Cameras = i608
  i606.m_RendererIndex = i607[5]
  i606.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i607[6] )
  request.r(i607[7], i607[8], 0, i606, 'm_VolumeTrigger')
  i606.m_VolumeFrameworkUpdateModeOption = i607[9]
  i606.m_RenderPostProcessing = !!i607[10]
  i606.m_Antialiasing = i607[11]
  i606.m_AntialiasingQuality = i607[12]
  i606.m_StopNaN = !!i607[13]
  i606.m_Dithering = !!i607[14]
  i606.m_ClearDepth = !!i607[15]
  i606.m_AllowXRRendering = !!i607[16]
  i606.m_AllowHDROutput = !!i607[17]
  i606.m_UseScreenCoordOverride = !!i607[18]
  i606.m_ScreenSizeOverride = new pc.Vec4( i607[19], i607[20], i607[21], i607[22] )
  i606.m_ScreenCoordScaleBias = new pc.Vec4( i607[23], i607[24], i607[25], i607[26] )
  i606.m_RequiresDepthTexture = !!i607[27]
  i606.m_RequiresColorTexture = !!i607[28]
  i606.m_Version = i607[29]
  i606.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i607[30], i606.m_TaaSettings)
  return i606
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i613 = data
  i612.m_Quality = i613[0]
  i612.m_FrameInfluence = i613[1]
  i612.m_JitterScale = i613[2]
  i612.m_MipBias = i613[3]
  i612.m_VarianceClampScale = i613[4]
  i612.m_ContrastAdaptiveSharpening = i613[5]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i615 = data
  i614.enabled = !!i615[0]
  i614.type = i615[1]
  i614.color = new pc.Color(i615[2], i615[3], i615[4], i615[5])
  i614.cullingMask = i615[6]
  i614.intensity = i615[7]
  i614.range = i615[8]
  i614.spotAngle = i615[9]
  i614.shadows = i615[10]
  i614.shadowNormalBias = i615[11]
  i614.shadowBias = i615[12]
  i614.shadowStrength = i615[13]
  i614.shadowResolution = i615[14]
  i614.lightmapBakeType = i615[15]
  i614.renderMode = i615[16]
  request.r(i615[17], i615[18], 0, i614, 'cookie')
  i614.cookieSize = i615[19]
  return i614
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i617 = data
  i616.m_Version = i617[0]
  i616.m_UsePipelineSettings = !!i617[1]
  i616.m_AdditionalLightsShadowResolutionTier = i617[2]
  i616.m_LightLayerMask = i617[3]
  i616.m_RenderingLayers = i617[4]
  i616.m_CustomShadowLayers = !!i617[5]
  i616.m_ShadowLayerMask = i617[6]
  i616.m_ShadowRenderingLayers = i617[7]
  i616.m_LightCookieSize = new pc.Vec2( i617[8], i617[9] )
  i616.m_LightCookieOffset = new pc.Vec2( i617[10], i617[11] )
  i616.m_SoftShadowQuality = i617[12]
  return i616
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i619 = data
  i618.priority = i619[0]
  i618.blendDistance = i619[1]
  i618.weight = i619[2]
  request.r(i619[3], i619[4], 0, i618, 'sharedProfile')
  i618.m_IsGlobal = !!i619[5]
  return i618
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_FirstSelected')
  i620.m_sendNavigationEvents = !!i621[2]
  i620.m_DragThreshold = i621[3]
  return i620
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i623 = data
  i622.m_HorizontalAxis = i623[0]
  i622.m_VerticalAxis = i623[1]
  i622.m_SubmitButton = i623[2]
  i622.m_CancelButton = i623[3]
  i622.m_InputActionsPerSecond = i623[4]
  i622.m_RepeatDelay = i623[5]
  i622.m_ForceModuleActive = !!i623[6]
  i622.m_SendPointerHoverToParent = !!i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i625 = data
  i624.enabled = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'sharedMaterial')
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sharedMaterials = i626
  i624.receiveShadows = !!i625[4]
  i624.shadowCastingMode = i625[5]
  i624.sortingLayerID = i625[6]
  i624.sortingOrder = i625[7]
  i624.lightmapIndex = i625[8]
  i624.lightmapSceneIndex = i625[9]
  i624.lightmapScaleOffset = new pc.Vec4( i625[10], i625[11], i625[12], i625[13] )
  i624.lightProbeUsage = i625[14]
  i624.reflectionProbeUsage = i625[15]
  i624.color = new pc.Color(i625[16], i625[17], i625[18], i625[19])
  request.r(i625[20], i625[21], 0, i624, 'sprite')
  i624.flipX = !!i625[22]
  i624.flipY = !!i625[23]
  i624.drawMode = i625[24]
  i624.size = new pc.Vec2( i625[25], i625[26] )
  i624.tileMode = i625[27]
  i624.adaptiveModeThreshold = i625[28]
  i624.maskInteraction = i625[29]
  i624.spriteSortPoint = i625[30]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i629 = data
  i628.ambientIntensity = i629[0]
  i628.reflectionIntensity = i629[1]
  i628.ambientMode = i629[2]
  i628.ambientLight = new pc.Color(i629[3], i629[4], i629[5], i629[6])
  i628.ambientSkyColor = new pc.Color(i629[7], i629[8], i629[9], i629[10])
  i628.ambientGroundColor = new pc.Color(i629[11], i629[12], i629[13], i629[14])
  i628.ambientEquatorColor = new pc.Color(i629[15], i629[16], i629[17], i629[18])
  i628.fogColor = new pc.Color(i629[19], i629[20], i629[21], i629[22])
  i628.fogEndDistance = i629[23]
  i628.fogStartDistance = i629[24]
  i628.fogDensity = i629[25]
  i628.fog = !!i629[26]
  request.r(i629[27], i629[28], 0, i628, 'skybox')
  i628.fogMode = i629[29]
  var i631 = i629[30]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i631[i + 0]) );
  }
  i628.lightmaps = i630
  i628.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i629[31], i628.lightProbes)
  i628.lightmapsMode = i629[32]
  i628.mixedBakeMode = i629[33]
  i628.environmentLightingMode = i629[34]
  i628.ambientProbe = new pc.SphericalHarmonicsL2(i629[35])
  i628.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i629[36])
  i628.useReferenceAmbientProbe = !!i629[37]
  request.r(i629[38], i629[39], 0, i628, 'customReflection')
  request.r(i629[40], i629[41], 0, i628, 'defaultReflection')
  i628.defaultReflectionMode = i629[42]
  i628.defaultReflectionResolution = i629[43]
  i628.sunLightObjectId = i629[44]
  i628.pixelLightCount = i629[45]
  i628.defaultReflectionHDR = !!i629[46]
  i628.hasLightDataAsset = !!i629[47]
  i628.hasManualGenerate = !!i629[48]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'lightmapColor')
  request.r(i635[2], i635[3], 0, i634, 'lightmapDirection')
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i636 = root || new UnityEngine.LightProbes()
  var i637 = data
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i645 = data
  i644.pivot = new pc.Vec2( i645[0], i645[1] )
  i644.anchorMin = new pc.Vec2( i645[2], i645[3] )
  i644.anchorMax = new pc.Vec2( i645[4], i645[5] )
  i644.sizeDelta = new pc.Vec2( i645[6], i645[7] )
  i644.anchoredPosition3D = new pc.Vec3( i645[8], i645[9], i645[10] )
  i644.rotation = new pc.Quat(i645[11], i645[12], i645[13], i645[14])
  i644.scale = new pc.Vec3( i645[15], i645[16], i645[17] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.planeDistance = i647[1]
  i646.referencePixelsPerUnit = i647[2]
  i646.isFallbackOverlay = !!i647[3]
  i646.renderMode = i647[4]
  i646.renderOrder = i647[5]
  i646.sortingLayerName = i647[6]
  i646.sortingOrder = i647[7]
  i646.scaleFactor = i647[8]
  request.r(i647[9], i647[10], 0, i646, 'worldCamera')
  i646.overrideSorting = !!i647[11]
  i646.pixelPerfect = !!i647[12]
  i646.targetDisplay = i647[13]
  i646.overridePixelPerfect = !!i647[14]
  return i646
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i649 = data
  i648.m_UiScaleMode = i649[0]
  i648.m_ReferencePixelsPerUnit = i649[1]
  i648.m_ScaleFactor = i649[2]
  i648.m_ReferenceResolution = new pc.Vec2( i649[3], i649[4] )
  i648.m_ScreenMatchMode = i649[5]
  i648.m_MatchWidthOrHeight = i649[6]
  i648.m_PhysicalUnit = i649[7]
  i648.m_FallbackScreenDPI = i649[8]
  i648.m_DefaultSpriteDPI = i649[9]
  i648.m_DynamicPixelsPerUnit = i649[10]
  i648.m_PresetInfoIsWorld = !!i649[11]
  return i648
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i651 = data
  i650.m_IgnoreReversedGraphics = !!i651[0]
  i650.m_BlockingObjects = i651[1]
  i650.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i651[2] )
  return i650
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'panelPrefab')
  var i655 = i653[2]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i655[i + 0]));
  }
  i652.prefabs = i654
  return i652
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i659 = data
  i658.type = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'prefab')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i661 = data
  i660.cullTransparentMesh = !!i661[0]
  return i660
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Image' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_Sprite')
  i662.m_Type = i663[2]
  i662.m_PreserveAspect = !!i663[3]
  i662.m_FillCenter = !!i663[4]
  i662.m_FillMethod = i663[5]
  i662.m_FillAmount = i663[6]
  i662.m_FillClockwise = !!i663[7]
  i662.m_FillOrigin = i663[8]
  i662.m_UseSpriteMesh = !!i663[9]
  i662.m_PixelsPerUnitMultiplier = i663[10]
  request.r(i663[11], i663[12], 0, i662, 'm_Material')
  i662.m_Maskable = !!i663[13]
  i662.m_Color = new pc.Color(i663[14], i663[15], i663[16], i663[17])
  i662.m_RaycastTarget = !!i663[18]
  i662.m_RaycastPadding = new pc.Vec4( i663[19], i663[20], i663[21], i663[22] )
  return i662
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i665 = data
  i664.m_Spacing = i665[0]
  i664.m_ChildForceExpandWidth = !!i665[1]
  i664.m_ChildForceExpandHeight = !!i665[2]
  i664.m_ChildControlWidth = !!i665[3]
  i664.m_ChildControlHeight = !!i665[4]
  i664.m_ChildScaleWidth = !!i665[5]
  i664.m_ChildScaleHeight = !!i665[6]
  i664.m_ReverseArrangement = !!i665[7]
  i664.m_Padding = UnityEngine.RectOffset.FromPaddings(i665[8], i665[9], i665[10], i665[11])
  i664.m_ChildAlignment = i665[12]
  return i664
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i667 = data
  i666.m_HorizontalFit = i667[0]
  i666.m_VerticalFit = i667[1]
  return i666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'contentHolder')
  return i668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'nameLabel')
  request.r(i671[2], i671[3], 0, i670, 'scrollRect')
  request.r(i671[4], i671[5], 0, i670, 'viewport')
  request.r(i671[6], i671[7], 0, i670, 'Canvas')
  return i670
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i673 = data
  i672.m_IgnoreLayout = !!i673[0]
  i672.m_MinWidth = i673[1]
  i672.m_MinHeight = i673[2]
  i672.m_PreferredWidth = i673[3]
  i672.m_PreferredHeight = i673[4]
  i672.m_FlexibleWidth = i673[5]
  i672.m_FlexibleHeight = i673[6]
  i672.m_LayoutPriority = i673[7]
  return i672
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Button' )
  var i675 = data
  i674.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i675[0], i674.m_OnClick)
  i674.m_Navigation = request.d('UnityEngine.UI.Navigation', i675[1], i674.m_Navigation)
  i674.m_Transition = i675[2]
  i674.m_Colors = request.d('UnityEngine.UI.ColorBlock', i675[3], i674.m_Colors)
  i674.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i675[4], i674.m_SpriteState)
  i674.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i675[5], i674.m_AnimationTriggers)
  i674.m_Interactable = !!i675[6]
  request.r(i675[7], i675[8], 0, i674, 'm_TargetGraphic')
  return i674
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i677 = data
  i676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i677[0], i676.m_PersistentCalls)
  return i676
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('UnityEngine.Events.PersistentCall', i681[i + 0]));
  }
  i678.m_Calls = i680
  return i678
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_Target')
  i684.m_TargetAssemblyTypeName = i685[2]
  i684.m_MethodName = i685[3]
  i684.m_Mode = i685[4]
  i684.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i685[5], i684.m_Arguments)
  i684.m_CallState = i685[6]
  return i684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_ObjectArgument')
  i686.m_ObjectArgumentAssemblyTypeName = i687[2]
  i686.m_IntArgument = i687[3]
  i686.m_FloatArgument = i687[4]
  i686.m_StringArgument = i687[5]
  i686.m_BoolArgument = !!i687[6]
  return i686
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i689 = data
  i688.m_Mode = i689[0]
  i688.m_WrapAround = !!i689[1]
  request.r(i689[2], i689[3], 0, i688, 'm_SelectOnUp')
  request.r(i689[4], i689[5], 0, i688, 'm_SelectOnDown')
  request.r(i689[6], i689[7], 0, i688, 'm_SelectOnLeft')
  request.r(i689[8], i689[9], 0, i688, 'm_SelectOnRight')
  return i688
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i691 = data
  i690.m_NormalColor = new pc.Color(i691[0], i691[1], i691[2], i691[3])
  i690.m_HighlightedColor = new pc.Color(i691[4], i691[5], i691[6], i691[7])
  i690.m_PressedColor = new pc.Color(i691[8], i691[9], i691[10], i691[11])
  i690.m_SelectedColor = new pc.Color(i691[12], i691[13], i691[14], i691[15])
  i690.m_DisabledColor = new pc.Color(i691[16], i691[17], i691[18], i691[19])
  i690.m_ColorMultiplier = i691[20]
  i690.m_FadeDuration = i691[21]
  return i690
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_HighlightedSprite')
  request.r(i693[2], i693[3], 0, i692, 'm_PressedSprite')
  request.r(i693[4], i693[5], 0, i692, 'm_SelectedSprite')
  request.r(i693[6], i693[7], 0, i692, 'm_DisabledSprite')
  return i692
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i695 = data
  i694.m_NormalTrigger = i695[0]
  i694.m_HighlightedTrigger = i695[1]
  i694.m_PressedTrigger = i695[2]
  i694.m_SelectedTrigger = i695[3]
  i694.m_DisabledTrigger = i695[4]
  return i694
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Text' )
  var i697 = data
  i696.m_FontData = request.d('UnityEngine.UI.FontData', i697[0], i696.m_FontData)
  i696.m_Text = i697[1]
  request.r(i697[2], i697[3], 0, i696, 'm_Material')
  i696.m_Maskable = !!i697[4]
  i696.m_Color = new pc.Color(i697[5], i697[6], i697[7], i697[8])
  i696.m_RaycastTarget = !!i697[9]
  i696.m_RaycastPadding = new pc.Vec4( i697[10], i697[11], i697[12], i697[13] )
  return i696
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.FontData' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Font')
  i698.m_FontSize = i699[2]
  i698.m_FontStyle = i699[3]
  i698.m_BestFit = !!i699[4]
  i698.m_MinSize = i699[5]
  i698.m_MaxSize = i699[6]
  i698.m_Alignment = i699[7]
  i698.m_AlignByGeometry = !!i699[8]
  i698.m_RichText = !!i699[9]
  i698.m_HorizontalOverflow = i699[10]
  i698.m_VerticalOverflow = i699[11]
  i698.m_LineSpacing = i699[12]
  return i698
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Content')
  i700.m_Horizontal = !!i701[2]
  i700.m_Vertical = !!i701[3]
  i700.m_MovementType = i701[4]
  i700.m_Elasticity = i701[5]
  i700.m_Inertia = !!i701[6]
  i700.m_DecelerationRate = i701[7]
  i700.m_ScrollSensitivity = i701[8]
  request.r(i701[9], i701[10], 0, i700, 'm_Viewport')
  request.r(i701[11], i701[12], 0, i700, 'm_HorizontalScrollbar')
  request.r(i701[13], i701[14], 0, i700, 'm_VerticalScrollbar')
  i700.m_HorizontalScrollbarVisibility = i701[15]
  i700.m_VerticalScrollbarVisibility = i701[16]
  i700.m_HorizontalScrollbarSpacing = i701[17]
  i700.m_VerticalScrollbarSpacing = i701[18]
  i700.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i701[19], i700.m_OnValueChanged)
  return i700
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i703 = data
  i702.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i703[0], i702.m_PersistentCalls)
  return i702
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Mask' )
  var i705 = data
  i704.m_ShowMaskGraphic = !!i705[0]
  return i704
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_HandleRect')
  i706.m_Direction = i707[2]
  i706.m_Value = i707[3]
  i706.m_Size = i707[4]
  i706.m_NumberOfSteps = i707[5]
  i706.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i707[6], i706.m_OnValueChanged)
  i706.m_Navigation = request.d('UnityEngine.UI.Navigation', i707[7], i706.m_Navigation)
  i706.m_Transition = i707[8]
  i706.m_Colors = request.d('UnityEngine.UI.ColorBlock', i707[9], i706.m_Colors)
  i706.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i707[10], i706.m_SpriteState)
  i706.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i707[11], i706.m_AnimationTriggers)
  i706.m_Interactable = !!i707[12]
  request.r(i707[13], i707[14], 0, i706, 'm_TargetGraphic')
  return i706
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i709 = data
  i708.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i709[0], i708.m_PersistentCalls)
  return i708
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i713[i + 0]));
  }
  i710.m_Delegates = i712
  return i710
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i717 = data
  i716.eventID = i717[0]
  i716.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i717[1], i716.callback)
  return i716
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'nameLabel')
  request.r(i721[2], i721[3], 0, i720, 'valueLabel')
  i720.colorDefault = new pc.Color(i721[4], i721[5], i721[6], i721[7])
  i720.colorSelected = new pc.Color(i721[8], i721[9], i721[10], i721[11])
  return i720
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'nameLabel')
  request.r(i723[2], i723[3], 0, i722, 'valueToggle')
  request.r(i723[4], i723[5], 0, i722, 'checkmarkImage')
  i722.colorDefault = new pc.Color(i723[6], i723[7], i723[8], i723[9])
  i722.colorSelected = new pc.Color(i723[10], i723[11], i723[12], i723[13])
  return i722
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i725 = data
  i724.toggleTransition = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'graphic')
  i724.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i725[3], i724.onValueChanged)
  request.r(i725[4], i725[5], 0, i724, 'm_Group')
  i724.m_IsOn = !!i725[6]
  i724.m_Navigation = request.d('UnityEngine.UI.Navigation', i725[7], i724.m_Navigation)
  i724.m_Transition = i725[8]
  i724.m_Colors = request.d('UnityEngine.UI.ColorBlock', i725[9], i724.m_Colors)
  i724.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i725[10], i724.m_SpriteState)
  i724.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i725[11], i724.m_AnimationTriggers)
  i724.m_Interactable = !!i725[12]
  request.r(i725[13], i725[14], 0, i724, 'm_TargetGraphic')
  return i724
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i727 = data
  i726.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i727[0], i726.m_PersistentCalls)
  return i726
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'nameLabel')
  request.r(i729[2], i729[3], 0, i728, 'valueLabel')
  i728.colorDefault = new pc.Color(i729[4], i729[5], i729[6], i729[7])
  i728.colorSelected = new pc.Color(i729[8], i729[9], i729[10], i729[11])
  return i728
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'nameLabel')
  request.r(i731[2], i731[3], 0, i730, 'valueLabel')
  i730.colorDefault = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.colorSelected = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  return i730
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'nameLabel')
  request.r(i733[2], i733[3], 0, i732, 'valueLabel')
  i732.colorDefault = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.colorSelected = new pc.Color(i733[8], i733[9], i733[10], i733[11])
  return i732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'nextButtonText')
  request.r(i735[2], i735[3], 0, i734, 'previousButtonText')
  request.r(i735[4], i735[5], 0, i734, 'nameLabel')
  request.r(i735[6], i735[7], 0, i734, 'valueLabel')
  i734.colorDefault = new pc.Color(i735[8], i735[9], i735[10], i735[11])
  i734.colorSelected = new pc.Color(i735[12], i735[13], i735[14], i735[15])
  return i734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'nameLabel')
  i736.colorDefault = new pc.Color(i737[2], i737[3], i737[4], i737[5])
  i736.colorSelected = new pc.Color(i737[6], i737[7], i737[8], i737[9])
  return i736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'nameLabel')
  request.r(i739[2], i739[3], 0, i738, 'valueToggle')
  i738.colorDefault = new pc.Color(i739[4], i739[5], i739[6], i739[7])
  i738.colorSelected = new pc.Color(i739[8], i739[9], i739[10], i739[11])
  return i738
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i741 = data
  i740.toggleTransition = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'graphic')
  i740.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i741[3], i740.onValueChanged)
  request.r(i741[4], i741[5], 0, i740, 'content')
  request.r(i741[6], i741[7], 0, i740, 'arrowOpened')
  request.r(i741[8], i741[9], 0, i740, 'arrowClosed')
  request.r(i741[10], i741[11], 0, i740, 'm_Group')
  i740.m_IsOn = !!i741[12]
  i740.m_Navigation = request.d('UnityEngine.UI.Navigation', i741[13], i740.m_Navigation)
  i740.m_Transition = i741[14]
  i740.m_Colors = request.d('UnityEngine.UI.ColorBlock', i741[15], i740.m_Colors)
  i740.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i741[16], i740.m_SpriteState)
  i740.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i741[17], i740.m_AnimationTriggers)
  i740.m_Interactable = !!i741[18]
  request.r(i741[19], i741[20], 0, i740, 'm_TargetGraphic')
  return i740
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'nameLabel')
  request.r(i743[2], i743[3], 0, i742, 'valueToggle')
  request.r(i743[4], i743[5], 0, i742, 'colorImage')
  request.r(i743[6], i743[7], 0, i742, 'fieldR')
  request.r(i743[8], i743[9], 0, i742, 'fieldG')
  request.r(i743[10], i743[11], 0, i742, 'fieldB')
  request.r(i743[12], i743[13], 0, i742, 'fieldA')
  i742.colorDefault = new pc.Color(i743[14], i743[15], i743[16], i743[17])
  i742.colorSelected = new pc.Color(i743[18], i743[19], i743[20], i743[21])
  return i742
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'nameLabel')
  request.r(i745[2], i745[3], 0, i744, 'valueLabel')
  i744.colorDefault = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.colorSelected = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  return i744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'nameLabel')
  request.r(i747[2], i747[3], 0, i746, 'valueToggle')
  request.r(i747[4], i747[5], 0, i746, 'fieldX')
  request.r(i747[6], i747[7], 0, i746, 'fieldY')
  i746.colorDefault = new pc.Color(i747[8], i747[9], i747[10], i747[11])
  i746.colorSelected = new pc.Color(i747[12], i747[13], i747[14], i747[15])
  return i746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'nameLabel')
  request.r(i749[2], i749[3], 0, i748, 'valueToggle')
  request.r(i749[4], i749[5], 0, i748, 'fieldX')
  request.r(i749[6], i749[7], 0, i748, 'fieldY')
  request.r(i749[8], i749[9], 0, i748, 'fieldZ')
  i748.colorDefault = new pc.Color(i749[10], i749[11], i749[12], i749[13])
  i748.colorSelected = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  return i748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'nameLabel')
  request.r(i751[2], i751[3], 0, i750, 'valueToggle')
  request.r(i751[4], i751[5], 0, i750, 'fieldX')
  request.r(i751[6], i751[7], 0, i750, 'fieldY')
  request.r(i751[8], i751[9], 0, i750, 'fieldZ')
  request.r(i751[10], i751[11], 0, i750, 'fieldW')
  i750.colorDefault = new pc.Color(i751[12], i751[13], i751[14], i751[15])
  i750.colorSelected = new pc.Color(i751[16], i751[17], i751[18], i751[19])
  return i750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i753 = data
  i752.colorDefault = new pc.Color(i753[0], i753[1], i753[2], i753[3])
  i752.colorSelected = new pc.Color(i753[4], i753[5], i753[6], i753[7])
  return i752
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i755 = data
  i754.m_Spacing = i755[0]
  i754.m_ChildForceExpandWidth = !!i755[1]
  i754.m_ChildForceExpandHeight = !!i755[2]
  i754.m_ChildControlWidth = !!i755[3]
  i754.m_ChildControlHeight = !!i755[4]
  i754.m_ChildScaleWidth = !!i755[5]
  i754.m_ChildScaleHeight = !!i755[6]
  i754.m_ReverseArrangement = !!i755[7]
  i754.m_Padding = UnityEngine.RectOffset.FromPaddings(i755[8], i755[9], i755[10], i755[11])
  i754.m_ChildAlignment = i755[12]
  return i754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i757 = data
  i756.colorDefault = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.colorSelected = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  return i756
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'nameLabel')
  request.r(i759[2], i759[3], 0, i758, 'header')
  i758.colorDefault = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.colorSelected = new pc.Color(i759[8], i759[9], i759[10], i759[11])
  return i758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'nameLabel')
  request.r(i761[2], i761[3], 0, i760, 'valueToggle')
  var i763 = i761[4]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.toggles = i762
  i760.colorDefault = new pc.Color(i761[5], i761[6], i761[7], i761[8])
  i760.colorSelected = new pc.Color(i761[9], i761[10], i761[11], i761[12])
  return i760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'nameLabel')
  request.r(i767[2], i767[3], 0, i766, 'valueToggle')
  request.r(i767[4], i767[5], 0, i766, 'checkmarkImage')
  i766.colorDefault = new pc.Color(i767[6], i767[7], i767[8], i767[9])
  i766.colorSelected = new pc.Color(i767[10], i767[11], i767[12], i767[13])
  return i766
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'nameLabel')
  request.r(i769[2], i769[3], 0, i768, 'valueToggle')
  request.r(i769[4], i769[5], 0, i768, 'checkmarkImage')
  i768.colorDefault = new pc.Color(i769[6], i769[7], i769[8], i769[9])
  i768.colorSelected = new pc.Color(i769[10], i769[11], i769[12], i769[13])
  return i768
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'nextButtonText')
  request.r(i771[2], i771[3], 0, i770, 'previousButtonText')
  request.r(i771[4], i771[5], 0, i770, 'nameLabel')
  request.r(i771[6], i771[7], 0, i770, 'valueLabel')
  i770.colorDefault = new pc.Color(i771[8], i771[9], i771[10], i771[11])
  i770.colorSelected = new pc.Color(i771[12], i771[13], i771[14], i771[15])
  return i770
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'nameLabel')
  request.r(i773[2], i773[3], 0, i772, 'valueToggle')
  i772.colorDefault = new pc.Color(i773[4], i773[5], i773[6], i773[7])
  i772.colorSelected = new pc.Color(i773[8], i773[9], i773[10], i773[11])
  return i772
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'nameLabel')
  i774.colorDefault = new pc.Color(i775[2], i775[3], i775[4], i775[5])
  i774.colorSelected = new pc.Color(i775[6], i775[7], i775[8], i775[9])
  return i774
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'nameLabel')
  request.r(i777[2], i777[3], 0, i776, 'valueLabel')
  request.r(i777[4], i777[5], 0, i776, 'progressBarRect')
  i776.colorDefault = new pc.Color(i777[6], i777[7], i777[8], i777[9])
  i776.colorSelected = new pc.Color(i777[10], i777[11], i777[12], i777[13])
  return i776
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'nameLabel')
  request.r(i779[2], i779[3], 0, i778, 'valueLabel')
  i778.colorDefault = new pc.Color(i779[4], i779[5], i779[6], i779[7])
  i778.colorSelected = new pc.Color(i779[8], i779[9], i779[10], i779[11])
  return i778
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'nameLabel')
  request.r(i781[2], i781[3], 0, i780, 'valueLabel')
  i780.colorDefault = new pc.Color(i781[4], i781[5], i781[6], i781[7])
  i780.colorSelected = new pc.Color(i781[8], i781[9], i781[10], i781[11])
  return i780
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'nextButtonText')
  request.r(i783[2], i783[3], 0, i782, 'previousButtonText')
  request.r(i783[4], i783[5], 0, i782, 'nameLabel')
  request.r(i783[6], i783[7], 0, i782, 'valueLabel')
  i782.colorDefault = new pc.Color(i783[8], i783[9], i783[10], i783[11])
  i782.colorSelected = new pc.Color(i783[12], i783[13], i783[14], i783[15])
  return i782
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'nextButtonText')
  request.r(i785[2], i785[3], 0, i784, 'previousButtonText')
  request.r(i785[4], i785[5], 0, i784, 'nameLabel')
  request.r(i785[6], i785[7], 0, i784, 'valueLabel')
  i784.colorDefault = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  i784.colorSelected = new pc.Color(i785[12], i785[13], i785[14], i785[15])
  return i784
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'panel')
  request.r(i787[2], i787[3], 0, i786, 'valuePrefab')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i789 = data
  i788.AdditionalLightsPerObjectLimit = i789[0]
  i788.AdditionalLightsRenderingMode = i789[1]
  i788.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i789[2], i788.LightRenderingMode)
  i788.ColorGradingLutSize = i789[3]
  i788.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i789[4], i788.ColorGradingMode)
  i788.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i789[5], i788.MainLightRenderingMode)
  i788.MainLightRenderingModeValue = i789[6]
  i788.SupportsMainLightShadows = !!i789[7]
  i788.MixedLightingSupported = !!i789[8]
  i788.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i789[9], i788.MsaaQuality)
  i788.MSAA = i789[10]
  i788.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i789[11], i788.OpaqueDownsampling)
  i788.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i789[12], i788.MainLightShadowmapResolution)
  i788.MainLightShadowmapResolutionValue = i789[13]
  i788.SupportsSoftShadows = !!i789[14]
  i788.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i789[15], i788.SoftShadowQuality)
  i788.SoftShadowQualityValue = i789[16]
  i788.ShadowDistance = i789[17]
  i788.ShadowCascadeCount = i789[18]
  i788.Cascade2Split = i789[19]
  i788.Cascade3Split = new pc.Vec2( i789[20], i789[21] )
  i788.Cascade4Split = new pc.Vec3( i789[22], i789[23], i789[24] )
  i788.CascadeBorder = i789[25]
  i788.ShadowDepthBias = i789[26]
  i788.ShadowNormalBias = i789[27]
  i788.RenderScale = i789[28]
  i788.RequireDepthTexture = !!i789[29]
  i788.RequireOpaqueTexture = !!i789[30]
  i788.SupportsHDR = !!i789[31]
  i788.SupportsTerrainHoles = !!i789[32]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i791 = data
  i790.Disabled = i791[0]
  i790.PerVertex = i791[1]
  i790.PerPixel = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i793 = data
  i792.LowDynamicRange = i793[0]
  i792.HighDynamicRange = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i795 = data
  i794.Disabled = i795[0]
  i794._2x = i795[1]
  i794._4x = i795[2]
  i794._8x = i795[3]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i797 = data
  i796.None = i797[0]
  i796._2xBilinear = i797[1]
  i796._4xBox = i797[2]
  i796._4xBilinear = i797[3]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i799 = data
  i798._256 = i799[0]
  i798._512 = i799[1]
  i798._1024 = i799[2]
  i798._2048 = i799[3]
  i798._4096 = i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i801 = data
  i800.UsePipelineSettings = i801[0]
  i800.Low = i801[1]
  i800.Medium = i801[2]
  i800.High = i801[3]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i805[i + 0]));
  }
  i802.ShaderCompilationErrors = i804
  i802.name = i803[1]
  i802.guid = i803[2]
  var i807 = i803[3]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i802.shaderDefinedKeywords = i806
  var i809 = i803[4]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i809[i + 0]) );
  }
  i802.passes = i808
  var i811 = i803[5]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i811[i + 0]) );
  }
  i802.usePasses = i810
  var i813 = i803[6]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i813[i + 0]) );
  }
  i802.defaultParameterValues = i812
  request.r(i803[7], i803[8], 0, i802, 'unityFallbackShader')
  i802.readDepth = !!i803[9]
  i802.isCreatedByShaderGraph = !!i803[10]
  i802.compiled = !!i803[11]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i817 = data
  i816.shaderName = i817[0]
  i816.errorMessage = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i822 = root || new pc.UnityShaderPass()
  var i823 = data
  i822.id = i823[0]
  i822.subShaderIndex = i823[1]
  i822.name = i823[2]
  i822.passType = i823[3]
  i822.grabPassTextureName = i823[4]
  i822.usePass = !!i823[5]
  i822.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[6], i822.zTest)
  i822.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[7], i822.zWrite)
  i822.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[8], i822.culling)
  i822.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[9], i822.blending)
  i822.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i823[10], i822.alphaBlending)
  i822.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[11], i822.colorWriteMask)
  i822.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[12], i822.offsetUnits)
  i822.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[13], i822.offsetFactor)
  i822.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[14], i822.stencilRef)
  i822.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[15], i822.stencilReadMask)
  i822.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[16], i822.stencilWriteMask)
  i822.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[17], i822.stencilOp)
  i822.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[18], i822.stencilOpFront)
  i822.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i823[19], i822.stencilOpBack)
  var i825 = i823[20]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i825[i + 0]) );
  }
  i822.tags = i824
  var i827 = i823[21]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.passDefinedKeywords = i826
  var i829 = i823[22]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i829[i + 0]) );
  }
  i822.passDefinedKeywordGroups = i828
  var i831 = i823[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i831[i + 0]) );
  }
  i822.variants = i830
  var i833 = i823[24]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i833[i + 0]) );
  }
  i822.excludedVariants = i832
  i822.hasDepthReader = !!i823[25]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i835 = data
  i834.val = i835[0]
  i834.name = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i837 = data
  i836.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[0], i836.src)
  i836.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[1], i836.dst)
  i836.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[2], i836.op)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i839 = data
  i838.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[0], i838.pass)
  i838.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[1], i838.fail)
  i838.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[2], i838.zFail)
  i838.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[3], i838.comp)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i843 = data
  i842.name = i843[0]
  i842.value = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i847 = data
  var i849 = i847[0]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i846.keywords = i848
  i846.hasDiscard = !!i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i853 = data
  i852.passId = i853[0]
  i852.subShaderIndex = i853[1]
  var i855 = i853[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i852.keywords = i854
  i852.vertexProgram = i853[3]
  i852.fragmentProgram = i853[4]
  i852.exportedForWebGl2 = !!i853[5]
  i852.readDepth = !!i853[6]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'shader')
  i858.pass = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i863 = data
  i862.name = i863[0]
  i862.type = i863[1]
  i862.value = new pc.Vec4( i863[2], i863[3], i863[4], i863[5] )
  i862.textureValue = i863[6]
  i862.shaderPropertyFlag = i863[7]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i865 = data
  i864.name = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'texture')
  i864.aabb = i865[3]
  i864.vertices = i865[4]
  i864.triangles = i865[5]
  i864.textureRect = UnityEngine.Rect.MinMaxRect(i865[6], i865[7], i865[8], i865[9])
  i864.packedRect = UnityEngine.Rect.MinMaxRect(i865[10], i865[11], i865[12], i865[13])
  i864.border = new pc.Vec4( i865[14], i865[15], i865[16], i865[17] )
  i864.transparency = i865[18]
  i864.bounds = i865[19]
  i864.pixelsPerUnit = i865[20]
  i864.textureWidth = i865[21]
  i864.textureHeight = i865[22]
  i864.nativeSize = new pc.Vec2( i865[23], i865[24] )
  i864.pivot = new pc.Vec2( i865[25], i865[26] )
  i864.textureRectOffset = new pc.Vec2( i865[27], i865[28] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i867 = data
  i866.name = i867[0]
  i866.ascent = i867[1]
  i866.originalLineHeight = i867[2]
  i866.fontSize = i867[3]
  var i869 = i867[4]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i869[i + 0]) );
  }
  i866.characterInfo = i868
  request.r(i867[5], i867[6], 0, i866, 'texture')
  i866.originalFontSize = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i873 = data
  i872.index = i873[0]
  i872.advance = i873[1]
  i872.bearing = i873[2]
  i872.glyphWidth = i873[3]
  i872.glyphHeight = i873[4]
  i872.minX = i873[5]
  i872.maxX = i873[6]
  i872.minY = i873[7]
  i872.maxY = i873[8]
  i872.uvBottomLeftX = i873[9]
  i872.uvBottomLeftY = i873[10]
  i872.uvBottomRightX = i873[11]
  i872.uvBottomRightY = i873[12]
  i872.uvTopLeftX = i873[13]
  i872.uvTopLeftY = i873[14]
  i872.uvTopRightX = i873[15]
  i872.uvTopRightY = i873[16]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i875 = data
  i874.name = i875[0]
  i874.bytes64 = i875[1]
  i874.data = i875[2]
  return i874
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i877 = data
  var i879 = i877[0]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i876.components = i878
  return i876
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i883 = data
  i882.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i883[0], i882.mode)
  i882.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i883[1], i882.neutralHDRRangeReductionMode)
  i882.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i883[2], i882.acesPreset)
  i882.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i883[3], i882.hueShiftAmount)
  i882.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i883[4], i882.detectPaperWhite)
  i882.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i883[5], i882.paperWhite)
  i882.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i883[6], i882.detectBrightnessLimits)
  i882.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i883[7], i882.minNits)
  i882.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i883[8], i882.maxNits)
  i882.active = !!i883[9]
  return i882
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i885 = data
  i884.m_Value = i885[0]
  i884.m_OverrideState = !!i885[1]
  return i884
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i887 = data
  i886.m_Value = i887[0]
  i886.m_OverrideState = !!i887[1]
  return i886
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i889 = data
  i888.m_Value = i889[0]
  i888.m_OverrideState = !!i889[1]
  return i888
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i891 = data
  i890.m_Value = i891[0]
  i890.m_OverrideState = !!i891[1]
  return i890
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i893 = data
  i892.m_Value = !!i893[0]
  i892.m_OverrideState = !!i893[1]
  return i892
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i895 = data
  i894.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i895[0], i894.skipIterations)
  i894.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i895[1], i894.threshold)
  i894.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i895[2], i894.intensity)
  i894.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i895[3], i894.scatter)
  i894.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i895[4], i894.clamp)
  i894.tint = request.d('UnityEngine.Rendering.ColorParameter', i895[5], i894.tint)
  i894.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i895[6], i894.highQualityFiltering)
  i894.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i895[7], i894.downscale)
  i894.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i895[8], i894.maxIterations)
  i894.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i895[9], i894.dirtTexture)
  i894.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i895[10], i894.dirtIntensity)
  i894.active = !!i895[11]
  return i894
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i897 = data
  i896.m_Value = i897[0]
  i896.m_OverrideState = !!i897[1]
  return i896
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i899 = data
  i898.m_Value = i899[0]
  i898.m_OverrideState = !!i899[1]
  return i898
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i901 = data
  i900.m_Value = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.m_OverrideState = !!i901[4]
  return i900
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i903 = data
  i902.m_Value = i903[0]
  i902.m_OverrideState = !!i903[1]
  return i902
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i905 = data
  i904.dimension = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'm_Value')
  i904.m_OverrideState = !!i905[3]
  return i904
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i907 = data
  i906.color = request.d('UnityEngine.Rendering.ColorParameter', i907[0], i906.color)
  i906.center = request.d('UnityEngine.Rendering.Vector2Parameter', i907[1], i906.center)
  i906.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i907[2], i906.intensity)
  i906.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i907[3], i906.smoothness)
  i906.rounded = request.d('UnityEngine.Rendering.BoolParameter', i907[4], i906.rounded)
  i906.active = !!i907[5]
  return i906
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i909 = data
  i908.m_Value = new pc.Vec2( i909[0], i909[1] )
  i908.m_OverrideState = !!i909[2]
  return i908
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i911 = data
  i910.useSafeMode = !!i911[0]
  i910.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i911[1], i910.safeModeOptions)
  i910.timeScale = i911[2]
  i910.unscaledTimeScale = i911[3]
  i910.useSmoothDeltaTime = !!i911[4]
  i910.maxSmoothUnscaledTime = i911[5]
  i910.rewindCallbackMode = i911[6]
  i910.showUnityEditorReport = !!i911[7]
  i910.logBehaviour = i911[8]
  i910.drawGizmos = !!i911[9]
  i910.defaultRecyclable = !!i911[10]
  i910.defaultAutoPlay = i911[11]
  i910.defaultUpdateType = i911[12]
  i910.defaultTimeScaleIndependent = !!i911[13]
  i910.defaultEaseType = i911[14]
  i910.defaultEaseOvershootOrAmplitude = i911[15]
  i910.defaultEasePeriod = i911[16]
  i910.defaultAutoKill = !!i911[17]
  i910.defaultLoopType = i911[18]
  i910.debugMode = !!i911[19]
  i910.debugStoreTargetId = !!i911[20]
  i910.showPreviewPanel = !!i911[21]
  i910.storeSettingsLocation = i911[22]
  i910.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i911[23], i910.modules)
  i910.createASMDEF = !!i911[24]
  i910.showPlayingTweens = !!i911[25]
  i910.showPausedTweens = !!i911[26]
  return i910
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i912 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i913 = data
  i912.logBehaviour = i913[0]
  i912.nestedTweenFailureBehaviour = i913[1]
  return i912
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i915 = data
  i914.showPanel = !!i915[0]
  i914.audioEnabled = !!i915[1]
  i914.physicsEnabled = !!i915[2]
  i914.physics2DEnabled = !!i915[3]
  i914.spriteEnabled = !!i915[4]
  i914.uiEnabled = !!i915[5]
  i914.textMeshProEnabled = !!i915[6]
  i914.tk2DEnabled = !!i915[7]
  i914.deAudioEnabled = !!i915[8]
  i914.deUnityExtendedEnabled = !!i915[9]
  i914.epoOutlineEnabled = !!i915[10]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i919[i + 0]) );
  }
  i916.files = i918
  i916.componentToPrefabIds = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i923 = data
  i922.path = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'unityObject')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i927[i + 0]) );
  }
  i924.scriptsExecutionOrder = i926
  var i929 = i925[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i929[i + 0]) );
  }
  i924.sortingLayers = i928
  var i931 = i925[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i931[i + 0]) );
  }
  i924.cullingLayers = i930
  i924.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i925[3], i924.timeSettings)
  i924.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i925[4], i924.physicsSettings)
  i924.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i925[5], i924.physics2DSettings)
  i924.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i925[6], i924.qualitySettings)
  i924.enableRealtimeShadows = !!i925[7]
  i924.enableAutoInstancing = !!i925[8]
  i924.enableDynamicBatching = !!i925[9]
  i924.lightmapEncodingQuality = i925[10]
  i924.desiredColorSpace = i925[11]
  var i933 = i925[12]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i924.allTags = i932
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i937 = data
  i936.name = i937[0]
  i936.value = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i941 = data
  i940.id = i941[0]
  i940.name = i941[1]
  i940.value = i941[2]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i947 = data
  i946.fixedDeltaTime = i947[0]
  i946.maximumDeltaTime = i947[1]
  i946.timeScale = i947[2]
  i946.maximumParticleTimestep = i947[3]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i949 = data
  i948.gravity = new pc.Vec3( i949[0], i949[1], i949[2] )
  i948.defaultSolverIterations = i949[3]
  i948.bounceThreshold = i949[4]
  i948.autoSyncTransforms = !!i949[5]
  i948.autoSimulation = !!i949[6]
  var i951 = i949[7]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i951[i + 0]) );
  }
  i948.collisionMatrix = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i955 = data
  i954.enabled = !!i955[0]
  i954.layerId = i955[1]
  i954.otherLayerId = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'material')
  i956.gravity = new pc.Vec2( i957[2], i957[3] )
  i956.positionIterations = i957[4]
  i956.velocityIterations = i957[5]
  i956.velocityThreshold = i957[6]
  i956.maxLinearCorrection = i957[7]
  i956.maxAngularCorrection = i957[8]
  i956.maxTranslationSpeed = i957[9]
  i956.maxRotationSpeed = i957[10]
  i956.baumgarteScale = i957[11]
  i956.baumgarteTOIScale = i957[12]
  i956.timeToSleep = i957[13]
  i956.linearSleepTolerance = i957[14]
  i956.angularSleepTolerance = i957[15]
  i956.defaultContactOffset = i957[16]
  i956.autoSimulation = !!i957[17]
  i956.queriesHitTriggers = !!i957[18]
  i956.queriesStartInColliders = !!i957[19]
  i956.callbacksOnDisable = !!i957[20]
  i956.reuseCollisionCallbacks = !!i957[21]
  i956.autoSyncTransforms = !!i957[22]
  var i959 = i957[23]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i959[i + 0]) );
  }
  i956.collisionMatrix = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i963 = data
  i962.enabled = !!i963[0]
  i962.layerId = i963[1]
  i962.otherLayerId = i963[2]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i967[i + 0]) );
  }
  i964.qualityLevels = i966
  var i969 = i965[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.names = i968
  i964.shadows = i965[2]
  i964.anisotropicFiltering = i965[3]
  i964.antiAliasing = i965[4]
  i964.lodBias = i965[5]
  i964.shadowCascades = i965[6]
  i964.shadowDistance = i965[7]
  i964.shadowmaskMode = i965[8]
  i964.shadowProjection = i965[9]
  i964.shadowResolution = i965[10]
  i964.softParticles = !!i965[11]
  i964.softVegetation = !!i965[12]
  i964.activeColorSpace = i965[13]
  i964.desiredColorSpace = i965[14]
  i964.masterTextureLimit = i965[15]
  i964.maxQueuedFrames = i965[16]
  i964.particleRaycastBudget = i965[17]
  i964.pixelLightCount = i965[18]
  i964.realtimeReflectionProbes = !!i965[19]
  i964.shadowCascade2Split = i965[20]
  i964.shadowCascade4Split = new pc.Vec3( i965[21], i965[22], i965[23] )
  i964.streamingMipmapsActive = !!i965[24]
  i964.vSyncCount = i965[25]
  i964.asyncUploadBufferSize = i965[26]
  i964.asyncUploadTimeSlice = i965[27]
  i964.billboardsFaceCameraPosition = !!i965[28]
  i964.shadowNearPlaneOffset = i965[29]
  i964.streamingMipmapsMemoryBudget = i965[30]
  i964.maximumLODLevel = i965[31]
  i964.streamingMipmapsAddAllCameras = !!i965[32]
  i964.streamingMipmapsMaxLevelReduction = i965[33]
  i964.streamingMipmapsRenderersPerFrame = i965[34]
  i964.resolutionScalingFixedDPIFactor = i965[35]
  i964.streamingMipmapsMaxFileIORequests = i965[36]
  i964.currentQualityLevel = i965[37]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i975 = data
  i974.weight = i975[0]
  i974.vertices = i975[1]
  i974.normals = i975[2]
  i974.tangents = i975[3]
  return i974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[90],"91":[14],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[101],"109":[101],"110":[101],"111":[101],"112":[101],"113":[101],"114":[14],"115":[5],"116":[117],"118":[117],"28":[27],"119":[101],"120":[32,121,27],"55":[27],"122":[14],"16":[14],"18":[17],"123":[124],"125":[27],"126":[27],"30":[28],"33":[32,27],"127":[27],"29":[28],"35":[27],"128":[27],"62":[27],"129":[27],"40":[27],"130":[27],"34":[27],"44":[27],"131":[27],"132":[32,27],"133":[27],"43":[27],"39":[27],"134":[27],"38":[32,27],"48":[27],"135":[22],"136":[22],"23":[22],"137":[22],"138":[14],"139":[14],"140":[124],"141":[124]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Slot","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","Stuff","UnityEngine.Texture2D","GridManager","UnityEngine.GameObject","DragAndDropManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Cubemap","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 06:03:32";

Deserializers.lunaDaysRunning = "1.5";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "tjddn831-gmail-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: \ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildID = "8dd33fe2-431a-44fa-9a05-e563cc3b9910";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

