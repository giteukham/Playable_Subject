var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  i2076.m_UseAcceleration = i2077[3]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2093 = data
  i2092.position = new pc.Vec3( i2093[0], i2093[1], i2093[2] )
  i2092.scale = new pc.Vec3( i2093[3], i2093[4], i2093[5] )
  i2092.rotation = new pc.Quat(i2093[6], i2093[7], i2093[8], i2093[9])
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2095 = data
  i2094.enabled = !!i2095[0]
  request.r(i2095[1], i2095[2], 0, i2094, 'sharedMaterial')
  var i2097 = i2095[3]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2094.sharedMaterials = i2096
  i2094.receiveShadows = !!i2095[4]
  i2094.shadowCastingMode = i2095[5]
  i2094.sortingLayerID = i2095[6]
  i2094.sortingOrder = i2095[7]
  i2094.lightmapIndex = i2095[8]
  i2094.lightmapSceneIndex = i2095[9]
  i2094.lightmapScaleOffset = new pc.Vec4( i2095[10], i2095[11], i2095[12], i2095[13] )
  i2094.lightProbeUsage = i2095[14]
  i2094.reflectionProbeUsage = i2095[15]
  i2094.color = new pc.Color(i2095[16], i2095[17], i2095[18], i2095[19])
  request.r(i2095[20], i2095[21], 0, i2094, 'sprite')
  i2094.flipX = !!i2095[22]
  i2094.flipY = !!i2095[23]
  i2094.drawMode = i2095[24]
  i2094.size = new pc.Vec2( i2095[25], i2095[26] )
  i2094.tileMode = i2095[27]
  i2094.adaptiveModeThreshold = i2095[28]
  i2094.maskInteraction = i2095[29]
  i2094.spriteSortPoint = i2095[30]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'animatorController')
  request.r(i2101[2], i2101[3], 0, i2100, 'avatar')
  i2100.updateMode = i2101[4]
  i2100.hasTransformHierarchy = !!i2101[5]
  i2100.applyRootMotion = !!i2101[6]
  var i2103 = i2101[7]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.humanBones = i2102
  i2100.enabled = !!i2101[8]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2107 = data
  i2106.bodyType = i2107[0]
  request.r(i2107[1], i2107[2], 0, i2106, 'material')
  i2106.simulated = !!i2107[3]
  i2106.useAutoMass = !!i2107[4]
  i2106.mass = i2107[5]
  i2106.drag = i2107[6]
  i2106.angularDrag = i2107[7]
  i2106.gravityScale = i2107[8]
  i2106.collisionDetectionMode = i2107[9]
  i2106.sleepMode = i2107[10]
  i2106.constraints = i2107[11]
  return i2106
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2108 = root || request.c( 'PlayerController' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, '_manager')
  i2108.moveSpeed = i2109[2]
  request.r(i2109[3], i2109[4], 0, i2108, 'hand')
  request.r(i2109[5], i2109[6], 0, i2108, 'introText')
  request.r(i2109[7], i2109[8], 0, i2108, 'targetObj')
  var i2111 = i2109[9]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 2) {
  request.r(i2111[i + 0], i2111[i + 1], 2, i2110, '')
  }
  i2108.player = i2110
  request.r(i2109[10], i2109[11], 0, i2108, 'cam')
  i2108.offScreen = i2109[12]
  i2108.ClampledValue = i2109[13]
  request.r(i2109[14], i2109[15], 0, i2108, 'anim')
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2115 = data
  i2114.usedByComposite = !!i2115[0]
  i2114.autoTiling = !!i2115[1]
  i2114.size = new pc.Vec2( i2115[2], i2115[3] )
  i2114.edgeRadius = i2115[4]
  i2114.enabled = !!i2115[5]
  i2114.isTrigger = !!i2115[6]
  i2114.usedByEffector = !!i2115[7]
  i2114.density = i2115[8]
  i2114.offset = new pc.Vec2( i2115[9], i2115[10] )
  request.r(i2115[11], i2115[12], 0, i2114, 'material')
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2117 = data
  i2116.name = i2117[0]
  i2116.tagId = i2117[1]
  i2116.enabled = !!i2117[2]
  i2116.isStatic = !!i2117[3]
  i2116.layer = i2117[4]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2118 = root || new pc.UnityMaterial()
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, 'shader')
  i2118.renderQueue = i2119[3]
  i2118.enableInstancing = !!i2119[4]
  var i2121 = i2119[5]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2121[i + 0]) );
  }
  i2118.floatParameters = i2120
  var i2123 = i2119[6]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2123[i + 0]) );
  }
  i2118.colorParameters = i2122
  var i2125 = i2119[7]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2125[i + 0]) );
  }
  i2118.vectorParameters = i2124
  var i2127 = i2119[8]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2127[i + 0]) );
  }
  i2118.textureParameters = i2126
  var i2129 = i2119[9]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2129[i + 0]) );
  }
  i2118.materialFlags = i2128
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.value = i2133[1]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.value = new pc.Color(i2137[1], i2137[2], i2137[3], i2137[4])
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.value = new pc.Vec4( i2141[1], i2141[2], i2141[3], i2141[4] )
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2145 = data
  i2144.name = i2145[0]
  request.r(i2145[1], i2145[2], 0, i2144, 'value')
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.enabled = !!i2149[1]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.width = i2151[1]
  i2150.height = i2151[2]
  i2150.mipmapCount = i2151[3]
  i2150.anisoLevel = i2151[4]
  i2150.filterMode = i2151[5]
  i2150.hdr = !!i2151[6]
  i2150.format = i2151[7]
  i2150.wrapMode = i2151[8]
  i2150.alphaIsTransparency = !!i2151[9]
  i2150.alphaSource = i2151[10]
  i2150.graphicsFormat = i2151[11]
  i2150.sRGBTexture = !!i2151[12]
  i2150.desiredColorSpace = i2151[13]
  i2150.wrapU = i2151[14]
  i2150.wrapV = i2151[15]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2153 = data
  i2152.pivot = new pc.Vec2( i2153[0], i2153[1] )
  i2152.anchorMin = new pc.Vec2( i2153[2], i2153[3] )
  i2152.anchorMax = new pc.Vec2( i2153[4], i2153[5] )
  i2152.sizeDelta = new pc.Vec2( i2153[6], i2153[7] )
  i2152.anchoredPosition3D = new pc.Vec3( i2153[8], i2153[9], i2153[10] )
  i2152.rotation = new pc.Quat(i2153[11], i2153[12], i2153[13], i2153[14])
  i2152.scale = new pc.Vec3( i2153[15], i2153[16], i2153[17] )
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2155 = data
  i2154.cullTransparentMesh = !!i2155[0]
  return i2154
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.Image' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_Sprite')
  i2156.m_Type = i2157[2]
  i2156.m_PreserveAspect = !!i2157[3]
  i2156.m_FillCenter = !!i2157[4]
  i2156.m_FillMethod = i2157[5]
  i2156.m_FillAmount = i2157[6]
  i2156.m_FillClockwise = !!i2157[7]
  i2156.m_FillOrigin = i2157[8]
  i2156.m_UseSpriteMesh = !!i2157[9]
  i2156.m_PixelsPerUnitMultiplier = i2157[10]
  request.r(i2157[11], i2157[12], 0, i2156, 'm_Material')
  i2156.m_Maskable = !!i2157[13]
  i2156.m_Color = new pc.Color(i2157[14], i2157[15], i2157[16], i2157[17])
  i2156.m_RaycastTarget = !!i2157[18]
  i2156.m_RaycastPadding = new pc.Vec4( i2157[19], i2157[20], i2157[21], i2157[22] )
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i2159 = data
  i2158.enabled = !!i2159[0]
  i2158.isTrigger = !!i2159[1]
  i2158.usedByEffector = !!i2159[2]
  i2158.density = i2159[3]
  i2158.offset = new pc.Vec2( i2159[4], i2159[5] )
  request.r(i2159[6], i2159[7], 0, i2158, 'material')
  i2158.edgeRadius = i2159[8]
  var i2161 = i2159[9]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
    i2160.push( new pc.Vec2( i2161[i + 0], i2161[i + 1] ) );
  }
  i2158.points = i2160
  i2158.useAdjacentStartPoint = !!i2159[10]
  i2158.adjacentStartPoint = new pc.Vec2( i2159[11], i2159[12] )
  i2158.useAdjacentEndPoint = !!i2159[13]
  i2158.adjacentEndPoint = new pc.Vec2( i2159[14], i2159[15] )
  return i2158
}

Deserializers["PlatformScript"] = function (request, data, root) {
  var i2164 = root || request.c( 'PlatformScript' )
  var i2165 = data
  i2164.jumpForce = i2165[0]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D' )
  var i2167 = data
  i2166.enabled = !!i2167[0]
  i2166.useColliderMask = !!i2167[1]
  i2166.colliderMask = i2167[2]
  return i2166
}

Deserializers["Shroom"] = function (request, data, root) {
  var i2168 = root || request.c( 'Shroom' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'particle')
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2171 = data
  i2170.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2171[0], i2170.main)
  i2170.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2171[1], i2170.colorBySpeed)
  i2170.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2171[2], i2170.colorOverLifetime)
  i2170.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2171[3], i2170.emission)
  i2170.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2171[4], i2170.rotationBySpeed)
  i2170.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2171[5], i2170.rotationOverLifetime)
  i2170.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2171[6], i2170.shape)
  i2170.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2171[7], i2170.sizeBySpeed)
  i2170.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2171[8], i2170.sizeOverLifetime)
  i2170.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2171[9], i2170.textureSheetAnimation)
  i2170.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2171[10], i2170.velocityOverLifetime)
  i2170.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2171[11], i2170.noise)
  i2170.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2171[12], i2170.inheritVelocity)
  i2170.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2171[13], i2170.forceOverLifetime)
  i2170.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2171[14], i2170.limitVelocityOverLifetime)
  i2170.useAutoRandomSeed = !!i2171[15]
  i2170.randomSeed = i2171[16]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemMain()
  var i2173 = data
  i2172.duration = i2173[0]
  i2172.loop = !!i2173[1]
  i2172.prewarm = !!i2173[2]
  i2172.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[3], i2172.startDelay)
  i2172.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[4], i2172.startLifetime)
  i2172.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[5], i2172.startSpeed)
  i2172.startSize3D = !!i2173[6]
  i2172.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[7], i2172.startSizeX)
  i2172.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[8], i2172.startSizeY)
  i2172.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[9], i2172.startSizeZ)
  i2172.startRotation3D = !!i2173[10]
  i2172.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[11], i2172.startRotationX)
  i2172.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[12], i2172.startRotationY)
  i2172.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[13], i2172.startRotationZ)
  i2172.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2173[14], i2172.startColor)
  i2172.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[15], i2172.gravityModifier)
  i2172.simulationSpace = i2173[16]
  request.r(i2173[17], i2173[18], 0, i2172, 'customSimulationSpace')
  i2172.simulationSpeed = i2173[19]
  i2172.useUnscaledTime = !!i2173[20]
  i2172.scalingMode = i2173[21]
  i2172.playOnAwake = !!i2173[22]
  i2172.maxParticles = i2173[23]
  i2172.emitterVelocityMode = i2173[24]
  i2172.stopAction = i2173[25]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2174 = root || new pc.MinMaxCurve()
  var i2175 = data
  i2174.mode = i2175[0]
  i2174.curveMin = new pc.AnimationCurve( { keys_flow: i2175[1] } )
  i2174.curveMax = new pc.AnimationCurve( { keys_flow: i2175[2] } )
  i2174.curveMultiplier = i2175[3]
  i2174.constantMin = i2175[4]
  i2174.constantMax = i2175[5]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2176 = root || new pc.MinMaxGradient()
  var i2177 = data
  i2176.mode = i2177[0]
  i2176.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2177[1], i2176.gradientMin)
  i2176.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2177[2], i2176.gradientMax)
  i2176.colorMin = new pc.Color(i2177[3], i2177[4], i2177[5], i2177[6])
  i2176.colorMax = new pc.Color(i2177[7], i2177[8], i2177[9], i2177[10])
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2179 = data
  i2178.mode = i2179[0]
  var i2181 = i2179[1]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2181[i + 0]) );
  }
  i2178.colorKeys = i2180
  var i2183 = i2179[2]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2183[i + 0]) );
  }
  i2178.alphaKeys = i2182
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2187 = data
  i2186.color = new pc.Color(i2187[0], i2187[1], i2187[2], i2187[3])
  i2186.time = i2187[4]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2191 = data
  i2190.alpha = i2191[0]
  i2190.time = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemColorBySpeed()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2193[1], i2192.color)
  i2192.range = new pc.Vec2( i2193[2], i2193[3] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemColorOverLifetime()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2195[1], i2194.color)
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemEmitter()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.rateOverTime)
  i2196.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.rateOverDistance)
  var i2199 = i2197[3]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2199[i + 0]) );
  }
  i2196.bursts = i2198
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemBurst()
  var i2203 = data
  i2202.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[0], i2202.count)
  i2202.cycleCount = i2203[1]
  i2202.minCount = i2203[2]
  i2202.maxCount = i2203[3]
  i2202.repeatInterval = i2203[4]
  i2202.time = i2203[5]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemRotationBySpeed()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.x)
  i2204.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.y)
  i2204.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.z)
  i2204.separateAxes = !!i2205[4]
  i2204.range = new pc.Vec2( i2205[5], i2205[6] )
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.x)
  i2206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.y)
  i2206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[3], i2206.z)
  i2206.separateAxes = !!i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemShape()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.shapeType = i2209[1]
  i2208.randomDirectionAmount = i2209[2]
  i2208.sphericalDirectionAmount = i2209[3]
  i2208.randomPositionAmount = i2209[4]
  i2208.alignToDirection = !!i2209[5]
  i2208.radius = i2209[6]
  i2208.radiusMode = i2209[7]
  i2208.radiusSpread = i2209[8]
  i2208.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[9], i2208.radiusSpeed)
  i2208.radiusThickness = i2209[10]
  i2208.angle = i2209[11]
  i2208.length = i2209[12]
  i2208.boxThickness = new pc.Vec3( i2209[13], i2209[14], i2209[15] )
  i2208.meshShapeType = i2209[16]
  request.r(i2209[17], i2209[18], 0, i2208, 'mesh')
  request.r(i2209[19], i2209[20], 0, i2208, 'meshRenderer')
  request.r(i2209[21], i2209[22], 0, i2208, 'skinnedMeshRenderer')
  i2208.useMeshMaterialIndex = !!i2209[23]
  i2208.meshMaterialIndex = i2209[24]
  i2208.useMeshColors = !!i2209[25]
  i2208.normalOffset = i2209[26]
  i2208.arc = i2209[27]
  i2208.arcMode = i2209[28]
  i2208.arcSpread = i2209[29]
  i2208.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[30], i2208.arcSpeed)
  i2208.donutRadius = i2209[31]
  i2208.position = new pc.Vec3( i2209[32], i2209[33], i2209[34] )
  i2208.rotation = new pc.Vec3( i2209[35], i2209[36], i2209[37] )
  i2208.scale = new pc.Vec3( i2209[38], i2209[39], i2209[40] )
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemSizeBySpeed()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[1], i2210.x)
  i2210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.y)
  i2210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.z)
  i2210.separateAxes = !!i2211[4]
  i2210.range = new pc.Vec2( i2211[5], i2211[6] )
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[1], i2212.x)
  i2212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.y)
  i2212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.z)
  i2212.separateAxes = !!i2213[4]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.mode = i2215[1]
  i2214.animation = i2215[2]
  i2214.numTilesX = i2215[3]
  i2214.numTilesY = i2215[4]
  i2214.useRandomRow = !!i2215[5]
  i2214.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[6], i2214.frameOverTime)
  i2214.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[7], i2214.startFrame)
  i2214.cycleCount = i2215[8]
  i2214.rowIndex = i2215[9]
  i2214.flipU = i2215[10]
  i2214.flipV = i2215[11]
  i2214.spriteCount = i2215[12]
  var i2217 = i2215[13]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2214.sprites = i2216
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[1], i2218.x)
  i2218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[2], i2218.y)
  i2218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[3], i2218.z)
  i2218.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[4], i2218.radial)
  i2218.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[5], i2218.speedModifier)
  i2218.space = i2219[6]
  i2218.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[7], i2218.orbitalX)
  i2218.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[8], i2218.orbitalY)
  i2218.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[9], i2218.orbitalZ)
  i2218.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[10], i2218.orbitalOffsetX)
  i2218.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[11], i2218.orbitalOffsetY)
  i2218.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[12], i2218.orbitalOffsetZ)
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemNoise()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.separateAxes = !!i2221[1]
  i2220.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[2], i2220.strengthX)
  i2220.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[3], i2220.strengthY)
  i2220.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[4], i2220.strengthZ)
  i2220.frequency = i2221[5]
  i2220.damping = !!i2221[6]
  i2220.octaveCount = i2221[7]
  i2220.octaveMultiplier = i2221[8]
  i2220.octaveScale = i2221[9]
  i2220.quality = i2221[10]
  i2220.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[11], i2220.scrollSpeed)
  i2220.scrollSpeedMultiplier = i2221[12]
  i2220.remapEnabled = !!i2221[13]
  i2220.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[14], i2220.remapX)
  i2220.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[15], i2220.remapY)
  i2220.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[16], i2220.remapZ)
  i2220.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[17], i2220.positionAmount)
  i2220.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[18], i2220.rotationAmount)
  i2220.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[19], i2220.sizeAmount)
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2222 = root || new pc.ParticleSystemInheritVelocity()
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.mode = i2223[1]
  i2222.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[2], i2222.curve)
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemForceOverLifetime()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[1], i2224.x)
  i2224.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[2], i2224.y)
  i2224.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[3], i2224.z)
  i2224.space = i2225[4]
  i2224.randomized = !!i2225[5]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[1], i2226.limit)
  i2226.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.limitX)
  i2226.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.limitY)
  i2226.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[4], i2226.limitZ)
  i2226.dampen = i2227[5]
  i2226.separateAxes = !!i2227[6]
  i2226.space = i2227[7]
  i2226.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[8], i2226.drag)
  i2226.multiplyDragByParticleSize = !!i2227[9]
  i2226.multiplyDragByParticleVelocity = !!i2227[10]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2229 = data
  i2228.enabled = !!i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'sharedMaterial')
  var i2231 = i2229[3]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 2, i2230, '')
  }
  i2228.sharedMaterials = i2230
  i2228.receiveShadows = !!i2229[4]
  i2228.shadowCastingMode = i2229[5]
  i2228.sortingLayerID = i2229[6]
  i2228.sortingOrder = i2229[7]
  i2228.lightmapIndex = i2229[8]
  i2228.lightmapSceneIndex = i2229[9]
  i2228.lightmapScaleOffset = new pc.Vec4( i2229[10], i2229[11], i2229[12], i2229[13] )
  i2228.lightProbeUsage = i2229[14]
  i2228.reflectionProbeUsage = i2229[15]
  request.r(i2229[16], i2229[17], 0, i2228, 'mesh')
  i2228.meshCount = i2229[18]
  i2228.activeVertexStreamsCount = i2229[19]
  i2228.alignment = i2229[20]
  i2228.renderMode = i2229[21]
  i2228.sortMode = i2229[22]
  i2228.lengthScale = i2229[23]
  i2228.velocityScale = i2229[24]
  i2228.cameraVelocityScale = i2229[25]
  i2228.normalDirection = i2229[26]
  i2228.sortingFudge = i2229[27]
  i2228.minParticleSize = i2229[28]
  i2228.maxParticleSize = i2229[29]
  i2228.pivot = new pc.Vec3( i2229[30], i2229[31], i2229[32] )
  request.r(i2229[33], i2229[34], 0, i2228, 'trailMaterial')
  return i2228
}

Deserializers["Winner"] = function (request, data, root) {
  var i2232 = root || request.c( 'Winner' )
  var i2233 = data
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.index = i2235[1]
  i2234.startup = !!i2235[2]
  return i2234
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2236 = root || request.c( 'GameManager' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'player')
  request.r(i2237[2], i2237[3], 0, i2236, 'endCardTitle')
  request.r(i2237[4], i2237[5], 0, i2236, 'endDescription')
  request.r(i2237[6], i2237[7], 0, i2236, 'endInstall')
  request.r(i2237[8], i2237[9], 0, i2236, 'score')
  request.r(i2237[10], i2237[11], 0, i2236, 'Intro')
  request.r(i2237[12], i2237[13], 0, i2236, 'retry')
  request.r(i2237[14], i2237[15], 0, i2236, 'Target')
  request.r(i2237[16], i2237[17], 0, i2236, 'endCard')
  request.r(i2237[18], i2237[19], 0, i2236, 'introText')
  request.r(i2237[20], i2237[21], 0, i2236, 'Hand')
  request.r(i2237[22], i2237[23], 0, i2236, 'targetObj')
  request.r(i2237[24], i2237[25], 0, i2236, 'retryBtn')
  i2236.title = i2237[26]
  i2236.description = i2237[27]
  i2236.installText = i2237[28]
  i2236.retryText = i2237[29]
  i2236.IntroText = i2237[30]
  i2236.targetText = i2237[31]
  i2236.textColours = new pc.Color(i2237[32], i2237[33], i2237[34], i2237[35])
  i2236.type = i2237[36]
  request.r(i2237[37], i2237[38], 0, i2236, 'iconTex')
  i2236.maxCount = i2237[39]
  request.r(i2237[40], i2237[41], 0, i2236, 'iconIMG')
  return i2236
}

Deserializers["PauseManager"] = function (request, data, root) {
  var i2238 = root || request.c( 'PauseManager' )
  var i2239 = data
  return i2238
}

Deserializers["LevelGenerator"] = function (request, data, root) {
  var i2240 = root || request.c( 'LevelGenerator' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'platform')
  request.r(i2241[2], i2241[3], 0, i2240, 'mushroom')
  i2240.spawnHeight = i2241[4]
  i2240.division = i2241[5]
  i2240.numberOfPlatform = i2241[6]
  i2240.levelWidth = i2241[7]
  i2240.minY = i2241[8]
  i2240.maxY = i2241[9]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2243 = data
  i2242.enabled = !!i2243[0]
  i2242.aspect = i2243[1]
  i2242.orthographic = !!i2243[2]
  i2242.orthographicSize = i2243[3]
  i2242.backgroundColor = new pc.Color(i2243[4], i2243[5], i2243[6], i2243[7])
  i2242.nearClipPlane = i2243[8]
  i2242.farClipPlane = i2243[9]
  i2242.fieldOfView = i2243[10]
  i2242.depth = i2243[11]
  i2242.clearFlags = i2243[12]
  i2242.cullingMask = i2243[13]
  i2242.rect = i2243[14]
  request.r(i2243[15], i2243[16], 0, i2242, 'targetTexture')
  i2242.usePhysicalProperties = !!i2243[17]
  i2242.focalLength = i2243[18]
  i2242.sensorSize = new pc.Vec2( i2243[19], i2243[20] )
  i2242.lensShift = new pc.Vec2( i2243[21], i2243[22] )
  i2242.gateFit = i2243[23]
  i2242.commandBufferCount = i2243[24]
  i2242.cameraType = i2243[25]
  return i2242
}

Deserializers["CamraFollow"] = function (request, data, root) {
  var i2244 = root || request.c( 'CamraFollow' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'target')
  i2244.smoothSpeed = i2245[2]
  return i2244
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2247 = data
  i2246.m_RenderShadows = !!i2247[0]
  i2246.m_RequiresDepthTextureOption = i2247[1]
  i2246.m_RequiresOpaqueTextureOption = i2247[2]
  i2246.m_CameraType = i2247[3]
  var i2249 = i2247[4]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 1, i2248, '')
  }
  i2246.m_Cameras = i2248
  i2246.m_RendererIndex = i2247[5]
  i2246.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2247[6] )
  request.r(i2247[7], i2247[8], 0, i2246, 'm_VolumeTrigger')
  i2246.m_VolumeFrameworkUpdateModeOption = i2247[9]
  i2246.m_RenderPostProcessing = !!i2247[10]
  i2246.m_Antialiasing = i2247[11]
  i2246.m_AntialiasingQuality = i2247[12]
  i2246.m_StopNaN = !!i2247[13]
  i2246.m_Dithering = !!i2247[14]
  i2246.m_ClearDepth = !!i2247[15]
  i2246.m_AllowXRRendering = !!i2247[16]
  i2246.m_AllowHDROutput = !!i2247[17]
  i2246.m_UseScreenCoordOverride = !!i2247[18]
  i2246.m_ScreenSizeOverride = new pc.Vec4( i2247[19], i2247[20], i2247[21], i2247[22] )
  i2246.m_ScreenCoordScaleBias = new pc.Vec4( i2247[23], i2247[24], i2247[25], i2247[26] )
  i2246.m_RequiresDepthTexture = !!i2247[27]
  i2246.m_RequiresColorTexture = !!i2247[28]
  i2246.m_Version = i2247[29]
  i2246.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2247[30], i2246.m_TaaSettings)
  return i2246
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2253 = data
  i2252.m_Quality = i2253[0]
  i2252.m_FrameInfluence = i2253[1]
  i2252.m_JitterScale = i2253[2]
  i2252.m_MipBias = i2253[3]
  i2252.m_VarianceClampScale = i2253[4]
  i2252.m_ContrastAdaptiveSharpening = i2253[5]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.planeDistance = i2255[1]
  i2254.referencePixelsPerUnit = i2255[2]
  i2254.isFallbackOverlay = !!i2255[3]
  i2254.renderMode = i2255[4]
  i2254.renderOrder = i2255[5]
  i2254.sortingLayerName = i2255[6]
  i2254.sortingOrder = i2255[7]
  i2254.scaleFactor = i2255[8]
  request.r(i2255[9], i2255[10], 0, i2254, 'worldCamera')
  i2254.overrideSorting = !!i2255[11]
  i2254.pixelPerfect = !!i2255[12]
  i2254.targetDisplay = i2255[13]
  i2254.overridePixelPerfect = !!i2255[14]
  return i2254
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2257 = data
  i2256.m_UiScaleMode = i2257[0]
  i2256.m_ReferencePixelsPerUnit = i2257[1]
  i2256.m_ScaleFactor = i2257[2]
  i2256.m_ReferenceResolution = new pc.Vec2( i2257[3], i2257[4] )
  i2256.m_ScreenMatchMode = i2257[5]
  i2256.m_MatchWidthOrHeight = i2257[6]
  i2256.m_PhysicalUnit = i2257[7]
  i2256.m_FallbackScreenDPI = i2257[8]
  i2256.m_DefaultSpriteDPI = i2257[9]
  i2256.m_DynamicPixelsPerUnit = i2257[10]
  i2256.m_PresetInfoIsWorld = !!i2257[11]
  return i2256
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2259 = data
  i2258.m_IgnoreReversedGraphics = !!i2259[0]
  i2258.m_BlockingObjects = i2259[1]
  i2258.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2259[2] )
  return i2258
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.Text' )
  var i2261 = data
  i2260.m_FontData = request.d('UnityEngine.UI.FontData', i2261[0], i2260.m_FontData)
  i2260.m_Text = i2261[1]
  request.r(i2261[2], i2261[3], 0, i2260, 'm_Material')
  i2260.m_Maskable = !!i2261[4]
  i2260.m_Color = new pc.Color(i2261[5], i2261[6], i2261[7], i2261[8])
  i2260.m_RaycastTarget = !!i2261[9]
  i2260.m_RaycastPadding = new pc.Vec4( i2261[10], i2261[11], i2261[12], i2261[13] )
  return i2260
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_Font')
  i2262.m_FontSize = i2263[2]
  i2262.m_FontStyle = i2263[3]
  i2262.m_BestFit = !!i2263[4]
  i2262.m_MinSize = i2263[5]
  i2262.m_MaxSize = i2263[6]
  i2262.m_Alignment = i2263[7]
  i2262.m_AlignByGeometry = !!i2263[8]
  i2262.m_RichText = !!i2263[9]
  i2262.m_HorizontalOverflow = i2263[10]
  i2262.m_VerticalOverflow = i2263[11]
  i2262.m_LineSpacing = i2263[12]
  return i2262
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.Button' )
  var i2265 = data
  i2264.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2265[0], i2264.m_OnClick)
  i2264.m_Navigation = request.d('UnityEngine.UI.Navigation', i2265[1], i2264.m_Navigation)
  i2264.m_Transition = i2265[2]
  i2264.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2265[3], i2264.m_Colors)
  i2264.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2265[4], i2264.m_SpriteState)
  i2264.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2265[5], i2264.m_AnimationTriggers)
  i2264.m_Interactable = !!i2265[6]
  request.r(i2265[7], i2265[8], 0, i2264, 'm_TargetGraphic')
  return i2264
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2267 = data
  i2266.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2267[0], i2266.m_PersistentCalls)
  return i2266
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2269 = data
  var i2271 = i2269[0]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(request.d('UnityEngine.Events.PersistentCall', i2271[i + 0]));
  }
  i2268.m_Calls = i2270
  return i2268
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'm_Target')
  i2274.m_TargetAssemblyTypeName = i2275[2]
  i2274.m_MethodName = i2275[3]
  i2274.m_Mode = i2275[4]
  i2274.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2275[5], i2274.m_Arguments)
  i2274.m_CallState = i2275[6]
  return i2274
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'm_ObjectArgument')
  i2276.m_ObjectArgumentAssemblyTypeName = i2277[2]
  i2276.m_IntArgument = i2277[3]
  i2276.m_FloatArgument = i2277[4]
  i2276.m_StringArgument = i2277[5]
  i2276.m_BoolArgument = !!i2277[6]
  return i2276
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2279 = data
  i2278.m_Mode = i2279[0]
  i2278.m_WrapAround = !!i2279[1]
  request.r(i2279[2], i2279[3], 0, i2278, 'm_SelectOnUp')
  request.r(i2279[4], i2279[5], 0, i2278, 'm_SelectOnDown')
  request.r(i2279[6], i2279[7], 0, i2278, 'm_SelectOnLeft')
  request.r(i2279[8], i2279[9], 0, i2278, 'm_SelectOnRight')
  return i2278
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2281 = data
  i2280.m_NormalColor = new pc.Color(i2281[0], i2281[1], i2281[2], i2281[3])
  i2280.m_HighlightedColor = new pc.Color(i2281[4], i2281[5], i2281[6], i2281[7])
  i2280.m_PressedColor = new pc.Color(i2281[8], i2281[9], i2281[10], i2281[11])
  i2280.m_SelectedColor = new pc.Color(i2281[12], i2281[13], i2281[14], i2281[15])
  i2280.m_DisabledColor = new pc.Color(i2281[16], i2281[17], i2281[18], i2281[19])
  i2280.m_ColorMultiplier = i2281[20]
  i2280.m_FadeDuration = i2281[21]
  return i2280
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'm_HighlightedSprite')
  request.r(i2283[2], i2283[3], 0, i2282, 'm_PressedSprite')
  request.r(i2283[4], i2283[5], 0, i2282, 'm_SelectedSprite')
  request.r(i2283[6], i2283[7], 0, i2282, 'm_DisabledSprite')
  return i2282
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2285 = data
  i2284.m_NormalTrigger = i2285[0]
  i2284.m_HighlightedTrigger = i2285[1]
  i2284.m_PressedTrigger = i2285[2]
  i2284.m_SelectedTrigger = i2285[3]
  i2284.m_DisabledTrigger = i2285[4]
  return i2284
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'm_FirstSelected')
  i2286.m_sendNavigationEvents = !!i2287[2]
  i2286.m_DragThreshold = i2287[3]
  return i2286
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2289 = data
  i2288.m_HorizontalAxis = i2289[0]
  i2288.m_VerticalAxis = i2289[1]
  i2288.m_SubmitButton = i2289[2]
  i2288.m_CancelButton = i2289[3]
  i2288.m_InputActionsPerSecond = i2289[4]
  i2288.m_RepeatDelay = i2289[5]
  i2288.m_ForceModuleActive = !!i2289[6]
  i2288.m_SendPointerHoverToParent = !!i2289[7]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2291 = data
  i2290.ambientIntensity = i2291[0]
  i2290.reflectionIntensity = i2291[1]
  i2290.ambientMode = i2291[2]
  i2290.ambientLight = new pc.Color(i2291[3], i2291[4], i2291[5], i2291[6])
  i2290.ambientSkyColor = new pc.Color(i2291[7], i2291[8], i2291[9], i2291[10])
  i2290.ambientGroundColor = new pc.Color(i2291[11], i2291[12], i2291[13], i2291[14])
  i2290.ambientEquatorColor = new pc.Color(i2291[15], i2291[16], i2291[17], i2291[18])
  i2290.fogColor = new pc.Color(i2291[19], i2291[20], i2291[21], i2291[22])
  i2290.fogEndDistance = i2291[23]
  i2290.fogStartDistance = i2291[24]
  i2290.fogDensity = i2291[25]
  i2290.fog = !!i2291[26]
  request.r(i2291[27], i2291[28], 0, i2290, 'skybox')
  i2290.fogMode = i2291[29]
  var i2293 = i2291[30]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2293[i + 0]) );
  }
  i2290.lightmaps = i2292
  i2290.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2291[31], i2290.lightProbes)
  i2290.lightmapsMode = i2291[32]
  i2290.mixedBakeMode = i2291[33]
  i2290.environmentLightingMode = i2291[34]
  i2290.ambientProbe = new pc.SphericalHarmonicsL2(i2291[35])
  i2290.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2291[36])
  i2290.useReferenceAmbientProbe = !!i2291[37]
  request.r(i2291[38], i2291[39], 0, i2290, 'customReflection')
  request.r(i2291[40], i2291[41], 0, i2290, 'defaultReflection')
  i2290.defaultReflectionMode = i2291[42]
  i2290.defaultReflectionResolution = i2291[43]
  i2290.sunLightObjectId = i2291[44]
  i2290.pixelLightCount = i2291[45]
  i2290.defaultReflectionHDR = !!i2291[46]
  i2290.hasLightDataAsset = !!i2291[47]
  i2290.hasManualGenerate = !!i2291[48]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'lightmapColor')
  request.r(i2297[2], i2297[3], 0, i2296, 'lightmapDirection')
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2298 = root || new UnityEngine.LightProbes()
  var i2299 = data
  return i2298
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'panelPrefab')
  var i2309 = i2307[2]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2309[i + 0]));
  }
  i2306.prefabs = i2308
  return i2306
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2313 = data
  i2312.type = i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'prefab')
  return i2312
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2315 = data
  i2314.m_Spacing = i2315[0]
  i2314.m_ChildForceExpandWidth = !!i2315[1]
  i2314.m_ChildForceExpandHeight = !!i2315[2]
  i2314.m_ChildControlWidth = !!i2315[3]
  i2314.m_ChildControlHeight = !!i2315[4]
  i2314.m_ChildScaleWidth = !!i2315[5]
  i2314.m_ChildScaleHeight = !!i2315[6]
  i2314.m_ReverseArrangement = !!i2315[7]
  i2314.m_Padding = UnityEngine.RectOffset.FromPaddings(i2315[8], i2315[9], i2315[10], i2315[11])
  i2314.m_ChildAlignment = i2315[12]
  return i2314
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2317 = data
  i2316.m_HorizontalFit = i2317[0]
  i2316.m_VerticalFit = i2317[1]
  return i2316
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'contentHolder')
  return i2318
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'nameLabel')
  request.r(i2321[2], i2321[3], 0, i2320, 'scrollRect')
  request.r(i2321[4], i2321[5], 0, i2320, 'viewport')
  request.r(i2321[6], i2321[7], 0, i2320, 'Canvas')
  return i2320
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2323 = data
  i2322.m_IgnoreLayout = !!i2323[0]
  i2322.m_MinWidth = i2323[1]
  i2322.m_MinHeight = i2323[2]
  i2322.m_PreferredWidth = i2323[3]
  i2322.m_PreferredHeight = i2323[4]
  i2322.m_FlexibleWidth = i2323[5]
  i2322.m_FlexibleHeight = i2323[6]
  i2322.m_LayoutPriority = i2323[7]
  return i2322
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'm_Content')
  i2324.m_Horizontal = !!i2325[2]
  i2324.m_Vertical = !!i2325[3]
  i2324.m_MovementType = i2325[4]
  i2324.m_Elasticity = i2325[5]
  i2324.m_Inertia = !!i2325[6]
  i2324.m_DecelerationRate = i2325[7]
  i2324.m_ScrollSensitivity = i2325[8]
  request.r(i2325[9], i2325[10], 0, i2324, 'm_Viewport')
  request.r(i2325[11], i2325[12], 0, i2324, 'm_HorizontalScrollbar')
  request.r(i2325[13], i2325[14], 0, i2324, 'm_VerticalScrollbar')
  i2324.m_HorizontalScrollbarVisibility = i2325[15]
  i2324.m_VerticalScrollbarVisibility = i2325[16]
  i2324.m_HorizontalScrollbarSpacing = i2325[17]
  i2324.m_VerticalScrollbarSpacing = i2325[18]
  i2324.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2325[19], i2324.m_OnValueChanged)
  return i2324
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2327 = data
  i2326.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2327[0], i2326.m_PersistentCalls)
  return i2326
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2329 = data
  i2328.m_ShowMaskGraphic = !!i2329[0]
  return i2328
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'm_HandleRect')
  i2330.m_Direction = i2331[2]
  i2330.m_Value = i2331[3]
  i2330.m_Size = i2331[4]
  i2330.m_NumberOfSteps = i2331[5]
  i2330.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2331[6], i2330.m_OnValueChanged)
  i2330.m_Navigation = request.d('UnityEngine.UI.Navigation', i2331[7], i2330.m_Navigation)
  i2330.m_Transition = i2331[8]
  i2330.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2331[9], i2330.m_Colors)
  i2330.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2331[10], i2330.m_SpriteState)
  i2330.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2331[11], i2330.m_AnimationTriggers)
  i2330.m_Interactable = !!i2331[12]
  request.r(i2331[13], i2331[14], 0, i2330, 'm_TargetGraphic')
  return i2330
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2333 = data
  i2332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2333[0], i2332.m_PersistentCalls)
  return i2332
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2335 = data
  var i2337 = i2335[0]
  var i2336 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2337[i + 0]));
  }
  i2334.m_Delegates = i2336
  return i2334
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2341 = data
  i2340.eventID = i2341[0]
  i2340.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2341[1], i2340.callback)
  return i2340
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2343 = data
  i2342.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2343[0], i2342.m_PersistentCalls)
  return i2342
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'nameLabel')
  request.r(i2345[2], i2345[3], 0, i2344, 'valueLabel')
  i2344.colorDefault = new pc.Color(i2345[4], i2345[5], i2345[6], i2345[7])
  i2344.colorSelected = new pc.Color(i2345[8], i2345[9], i2345[10], i2345[11])
  return i2344
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'nameLabel')
  request.r(i2347[2], i2347[3], 0, i2346, 'valueToggle')
  request.r(i2347[4], i2347[5], 0, i2346, 'checkmarkImage')
  i2346.colorDefault = new pc.Color(i2347[6], i2347[7], i2347[8], i2347[9])
  i2346.colorSelected = new pc.Color(i2347[10], i2347[11], i2347[12], i2347[13])
  return i2346
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2349 = data
  i2348.toggleTransition = i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'graphic')
  i2348.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2349[3], i2348.onValueChanged)
  request.r(i2349[4], i2349[5], 0, i2348, 'm_Group')
  i2348.m_IsOn = !!i2349[6]
  i2348.m_Navigation = request.d('UnityEngine.UI.Navigation', i2349[7], i2348.m_Navigation)
  i2348.m_Transition = i2349[8]
  i2348.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2349[9], i2348.m_Colors)
  i2348.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2349[10], i2348.m_SpriteState)
  i2348.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2349[11], i2348.m_AnimationTriggers)
  i2348.m_Interactable = !!i2349[12]
  request.r(i2349[13], i2349[14], 0, i2348, 'm_TargetGraphic')
  return i2348
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2351 = data
  i2350.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2351[0], i2350.m_PersistentCalls)
  return i2350
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'nameLabel')
  request.r(i2353[2], i2353[3], 0, i2352, 'valueLabel')
  i2352.colorDefault = new pc.Color(i2353[4], i2353[5], i2353[6], i2353[7])
  i2352.colorSelected = new pc.Color(i2353[8], i2353[9], i2353[10], i2353[11])
  return i2352
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'nameLabel')
  request.r(i2355[2], i2355[3], 0, i2354, 'valueLabel')
  i2354.colorDefault = new pc.Color(i2355[4], i2355[5], i2355[6], i2355[7])
  i2354.colorSelected = new pc.Color(i2355[8], i2355[9], i2355[10], i2355[11])
  return i2354
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'nameLabel')
  request.r(i2357[2], i2357[3], 0, i2356, 'valueLabel')
  i2356.colorDefault = new pc.Color(i2357[4], i2357[5], i2357[6], i2357[7])
  i2356.colorSelected = new pc.Color(i2357[8], i2357[9], i2357[10], i2357[11])
  return i2356
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'nextButtonText')
  request.r(i2359[2], i2359[3], 0, i2358, 'previousButtonText')
  request.r(i2359[4], i2359[5], 0, i2358, 'nameLabel')
  request.r(i2359[6], i2359[7], 0, i2358, 'valueLabel')
  i2358.colorDefault = new pc.Color(i2359[8], i2359[9], i2359[10], i2359[11])
  i2358.colorSelected = new pc.Color(i2359[12], i2359[13], i2359[14], i2359[15])
  return i2358
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'nameLabel')
  i2360.colorDefault = new pc.Color(i2361[2], i2361[3], i2361[4], i2361[5])
  i2360.colorSelected = new pc.Color(i2361[6], i2361[7], i2361[8], i2361[9])
  return i2360
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'nameLabel')
  request.r(i2363[2], i2363[3], 0, i2362, 'valueToggle')
  i2362.colorDefault = new pc.Color(i2363[4], i2363[5], i2363[6], i2363[7])
  i2362.colorSelected = new pc.Color(i2363[8], i2363[9], i2363[10], i2363[11])
  return i2362
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2365 = data
  i2364.toggleTransition = i2365[0]
  request.r(i2365[1], i2365[2], 0, i2364, 'graphic')
  i2364.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2365[3], i2364.onValueChanged)
  request.r(i2365[4], i2365[5], 0, i2364, 'content')
  request.r(i2365[6], i2365[7], 0, i2364, 'arrowOpened')
  request.r(i2365[8], i2365[9], 0, i2364, 'arrowClosed')
  request.r(i2365[10], i2365[11], 0, i2364, 'm_Group')
  i2364.m_IsOn = !!i2365[12]
  i2364.m_Navigation = request.d('UnityEngine.UI.Navigation', i2365[13], i2364.m_Navigation)
  i2364.m_Transition = i2365[14]
  i2364.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2365[15], i2364.m_Colors)
  i2364.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2365[16], i2364.m_SpriteState)
  i2364.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2365[17], i2364.m_AnimationTriggers)
  i2364.m_Interactable = !!i2365[18]
  request.r(i2365[19], i2365[20], 0, i2364, 'm_TargetGraphic')
  return i2364
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'nameLabel')
  request.r(i2367[2], i2367[3], 0, i2366, 'valueToggle')
  request.r(i2367[4], i2367[5], 0, i2366, 'colorImage')
  request.r(i2367[6], i2367[7], 0, i2366, 'fieldR')
  request.r(i2367[8], i2367[9], 0, i2366, 'fieldG')
  request.r(i2367[10], i2367[11], 0, i2366, 'fieldB')
  request.r(i2367[12], i2367[13], 0, i2366, 'fieldA')
  i2366.colorDefault = new pc.Color(i2367[14], i2367[15], i2367[16], i2367[17])
  i2366.colorSelected = new pc.Color(i2367[18], i2367[19], i2367[20], i2367[21])
  return i2366
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'nameLabel')
  request.r(i2369[2], i2369[3], 0, i2368, 'valueLabel')
  i2368.colorDefault = new pc.Color(i2369[4], i2369[5], i2369[6], i2369[7])
  i2368.colorSelected = new pc.Color(i2369[8], i2369[9], i2369[10], i2369[11])
  return i2368
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'nameLabel')
  request.r(i2371[2], i2371[3], 0, i2370, 'valueToggle')
  request.r(i2371[4], i2371[5], 0, i2370, 'fieldX')
  request.r(i2371[6], i2371[7], 0, i2370, 'fieldY')
  i2370.colorDefault = new pc.Color(i2371[8], i2371[9], i2371[10], i2371[11])
  i2370.colorSelected = new pc.Color(i2371[12], i2371[13], i2371[14], i2371[15])
  return i2370
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'nameLabel')
  request.r(i2373[2], i2373[3], 0, i2372, 'valueToggle')
  request.r(i2373[4], i2373[5], 0, i2372, 'fieldX')
  request.r(i2373[6], i2373[7], 0, i2372, 'fieldY')
  request.r(i2373[8], i2373[9], 0, i2372, 'fieldZ')
  i2372.colorDefault = new pc.Color(i2373[10], i2373[11], i2373[12], i2373[13])
  i2372.colorSelected = new pc.Color(i2373[14], i2373[15], i2373[16], i2373[17])
  return i2372
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'nameLabel')
  request.r(i2375[2], i2375[3], 0, i2374, 'valueToggle')
  request.r(i2375[4], i2375[5], 0, i2374, 'fieldX')
  request.r(i2375[6], i2375[7], 0, i2374, 'fieldY')
  request.r(i2375[8], i2375[9], 0, i2374, 'fieldZ')
  request.r(i2375[10], i2375[11], 0, i2374, 'fieldW')
  i2374.colorDefault = new pc.Color(i2375[12], i2375[13], i2375[14], i2375[15])
  i2374.colorSelected = new pc.Color(i2375[16], i2375[17], i2375[18], i2375[19])
  return i2374
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2377 = data
  i2376.colorDefault = new pc.Color(i2377[0], i2377[1], i2377[2], i2377[3])
  i2376.colorSelected = new pc.Color(i2377[4], i2377[5], i2377[6], i2377[7])
  return i2376
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2379 = data
  i2378.m_Spacing = i2379[0]
  i2378.m_ChildForceExpandWidth = !!i2379[1]
  i2378.m_ChildForceExpandHeight = !!i2379[2]
  i2378.m_ChildControlWidth = !!i2379[3]
  i2378.m_ChildControlHeight = !!i2379[4]
  i2378.m_ChildScaleWidth = !!i2379[5]
  i2378.m_ChildScaleHeight = !!i2379[6]
  i2378.m_ReverseArrangement = !!i2379[7]
  i2378.m_Padding = UnityEngine.RectOffset.FromPaddings(i2379[8], i2379[9], i2379[10], i2379[11])
  i2378.m_ChildAlignment = i2379[12]
  return i2378
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2381 = data
  i2380.colorDefault = new pc.Color(i2381[0], i2381[1], i2381[2], i2381[3])
  i2380.colorSelected = new pc.Color(i2381[4], i2381[5], i2381[6], i2381[7])
  return i2380
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'nameLabel')
  request.r(i2383[2], i2383[3], 0, i2382, 'header')
  i2382.colorDefault = new pc.Color(i2383[4], i2383[5], i2383[6], i2383[7])
  i2382.colorSelected = new pc.Color(i2383[8], i2383[9], i2383[10], i2383[11])
  return i2382
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'nameLabel')
  request.r(i2385[2], i2385[3], 0, i2384, 'valueToggle')
  var i2387 = i2385[4]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2384.toggles = i2386
  i2384.colorDefault = new pc.Color(i2385[5], i2385[6], i2385[7], i2385[8])
  i2384.colorSelected = new pc.Color(i2385[9], i2385[10], i2385[11], i2385[12])
  return i2384
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'nameLabel')
  request.r(i2391[2], i2391[3], 0, i2390, 'valueToggle')
  request.r(i2391[4], i2391[5], 0, i2390, 'checkmarkImage')
  i2390.colorDefault = new pc.Color(i2391[6], i2391[7], i2391[8], i2391[9])
  i2390.colorSelected = new pc.Color(i2391[10], i2391[11], i2391[12], i2391[13])
  return i2390
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'nameLabel')
  request.r(i2393[2], i2393[3], 0, i2392, 'valueToggle')
  request.r(i2393[4], i2393[5], 0, i2392, 'checkmarkImage')
  i2392.colorDefault = new pc.Color(i2393[6], i2393[7], i2393[8], i2393[9])
  i2392.colorSelected = new pc.Color(i2393[10], i2393[11], i2393[12], i2393[13])
  return i2392
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'nextButtonText')
  request.r(i2395[2], i2395[3], 0, i2394, 'previousButtonText')
  request.r(i2395[4], i2395[5], 0, i2394, 'nameLabel')
  request.r(i2395[6], i2395[7], 0, i2394, 'valueLabel')
  i2394.colorDefault = new pc.Color(i2395[8], i2395[9], i2395[10], i2395[11])
  i2394.colorSelected = new pc.Color(i2395[12], i2395[13], i2395[14], i2395[15])
  return i2394
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'nameLabel')
  request.r(i2397[2], i2397[3], 0, i2396, 'valueToggle')
  i2396.colorDefault = new pc.Color(i2397[4], i2397[5], i2397[6], i2397[7])
  i2396.colorSelected = new pc.Color(i2397[8], i2397[9], i2397[10], i2397[11])
  return i2396
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'nameLabel')
  i2398.colorDefault = new pc.Color(i2399[2], i2399[3], i2399[4], i2399[5])
  i2398.colorSelected = new pc.Color(i2399[6], i2399[7], i2399[8], i2399[9])
  return i2398
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'nameLabel')
  request.r(i2401[2], i2401[3], 0, i2400, 'valueLabel')
  request.r(i2401[4], i2401[5], 0, i2400, 'progressBarRect')
  i2400.colorDefault = new pc.Color(i2401[6], i2401[7], i2401[8], i2401[9])
  i2400.colorSelected = new pc.Color(i2401[10], i2401[11], i2401[12], i2401[13])
  return i2400
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'nameLabel')
  request.r(i2403[2], i2403[3], 0, i2402, 'valueLabel')
  i2402.colorDefault = new pc.Color(i2403[4], i2403[5], i2403[6], i2403[7])
  i2402.colorSelected = new pc.Color(i2403[8], i2403[9], i2403[10], i2403[11])
  return i2402
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'nameLabel')
  request.r(i2405[2], i2405[3], 0, i2404, 'valueLabel')
  i2404.colorDefault = new pc.Color(i2405[4], i2405[5], i2405[6], i2405[7])
  i2404.colorSelected = new pc.Color(i2405[8], i2405[9], i2405[10], i2405[11])
  return i2404
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'nextButtonText')
  request.r(i2407[2], i2407[3], 0, i2406, 'previousButtonText')
  request.r(i2407[4], i2407[5], 0, i2406, 'nameLabel')
  request.r(i2407[6], i2407[7], 0, i2406, 'valueLabel')
  i2406.colorDefault = new pc.Color(i2407[8], i2407[9], i2407[10], i2407[11])
  i2406.colorSelected = new pc.Color(i2407[12], i2407[13], i2407[14], i2407[15])
  return i2406
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'nextButtonText')
  request.r(i2409[2], i2409[3], 0, i2408, 'previousButtonText')
  request.r(i2409[4], i2409[5], 0, i2408, 'nameLabel')
  request.r(i2409[6], i2409[7], 0, i2408, 'valueLabel')
  i2408.colorDefault = new pc.Color(i2409[8], i2409[9], i2409[10], i2409[11])
  i2408.colorSelected = new pc.Color(i2409[12], i2409[13], i2409[14], i2409[15])
  return i2408
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'panel')
  request.r(i2411[2], i2411[3], 0, i2410, 'valuePrefab')
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2413 = data
  i2412.AdditionalLightsPerObjectLimit = i2413[0]
  i2412.AdditionalLightsRenderingMode = i2413[1]
  i2412.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2413[2], i2412.LightRenderingMode)
  i2412.ColorGradingLutSize = i2413[3]
  i2412.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2413[4], i2412.ColorGradingMode)
  i2412.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2413[5], i2412.MainLightRenderingMode)
  i2412.MainLightRenderingModeValue = i2413[6]
  i2412.SupportsMainLightShadows = !!i2413[7]
  i2412.MixedLightingSupported = !!i2413[8]
  i2412.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2413[9], i2412.MsaaQuality)
  i2412.MSAA = i2413[10]
  i2412.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2413[11], i2412.OpaqueDownsampling)
  i2412.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2413[12], i2412.MainLightShadowmapResolution)
  i2412.MainLightShadowmapResolutionValue = i2413[13]
  i2412.SupportsSoftShadows = !!i2413[14]
  i2412.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2413[15], i2412.SoftShadowQuality)
  i2412.SoftShadowQualityValue = i2413[16]
  i2412.ShadowDistance = i2413[17]
  i2412.ShadowCascadeCount = i2413[18]
  i2412.Cascade2Split = i2413[19]
  i2412.Cascade3Split = new pc.Vec2( i2413[20], i2413[21] )
  i2412.Cascade4Split = new pc.Vec3( i2413[22], i2413[23], i2413[24] )
  i2412.CascadeBorder = i2413[25]
  i2412.ShadowDepthBias = i2413[26]
  i2412.ShadowNormalBias = i2413[27]
  i2412.RenderScale = i2413[28]
  i2412.RequireDepthTexture = !!i2413[29]
  i2412.RequireOpaqueTexture = !!i2413[30]
  i2412.SupportsHDR = !!i2413[31]
  i2412.SupportsTerrainHoles = !!i2413[32]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2415 = data
  i2414.Disabled = i2415[0]
  i2414.PerVertex = i2415[1]
  i2414.PerPixel = i2415[2]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2417 = data
  i2416.LowDynamicRange = i2417[0]
  i2416.HighDynamicRange = i2417[1]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2419 = data
  i2418.Disabled = i2419[0]
  i2418._2x = i2419[1]
  i2418._4x = i2419[2]
  i2418._8x = i2419[3]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2421 = data
  i2420.None = i2421[0]
  i2420._2xBilinear = i2421[1]
  i2420._4xBox = i2421[2]
  i2420._4xBilinear = i2421[3]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2423 = data
  i2422._256 = i2423[0]
  i2422._512 = i2423[1]
  i2422._1024 = i2423[2]
  i2422._2048 = i2423[3]
  i2422._4096 = i2423[4]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2425 = data
  i2424.UsePipelineSettings = i2425[0]
  i2424.Low = i2425[1]
  i2424.Medium = i2425[2]
  i2424.High = i2425[3]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2429[i + 0]));
  }
  i2426.ShaderCompilationErrors = i2428
  i2426.name = i2427[1]
  i2426.guid = i2427[2]
  var i2431 = i2427[3]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( i2431[i + 0] );
  }
  i2426.shaderDefinedKeywords = i2430
  var i2433 = i2427[4]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2433[i + 0]) );
  }
  i2426.passes = i2432
  var i2435 = i2427[5]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2435[i + 0]) );
  }
  i2426.usePasses = i2434
  var i2437 = i2427[6]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2437[i + 0]) );
  }
  i2426.defaultParameterValues = i2436
  request.r(i2427[7], i2427[8], 0, i2426, 'unityFallbackShader')
  i2426.readDepth = !!i2427[9]
  i2426.isCreatedByShaderGraph = !!i2427[10]
  i2426.compiled = !!i2427[11]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2441 = data
  i2440.shaderName = i2441[0]
  i2440.errorMessage = i2441[1]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2446 = root || new pc.UnityShaderPass()
  var i2447 = data
  i2446.id = i2447[0]
  i2446.subShaderIndex = i2447[1]
  i2446.name = i2447[2]
  i2446.passType = i2447[3]
  i2446.grabPassTextureName = i2447[4]
  i2446.usePass = !!i2447[5]
  i2446.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[6], i2446.zTest)
  i2446.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[7], i2446.zWrite)
  i2446.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[8], i2446.culling)
  i2446.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2447[9], i2446.blending)
  i2446.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2447[10], i2446.alphaBlending)
  i2446.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[11], i2446.colorWriteMask)
  i2446.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[12], i2446.offsetUnits)
  i2446.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[13], i2446.offsetFactor)
  i2446.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[14], i2446.stencilRef)
  i2446.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[15], i2446.stencilReadMask)
  i2446.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2447[16], i2446.stencilWriteMask)
  i2446.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2447[17], i2446.stencilOp)
  i2446.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2447[18], i2446.stencilOpFront)
  i2446.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2447[19], i2446.stencilOpBack)
  var i2449 = i2447[20]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2449[i + 0]) );
  }
  i2446.tags = i2448
  var i2451 = i2447[21]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2446.passDefinedKeywords = i2450
  var i2453 = i2447[22]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2453[i + 0]) );
  }
  i2446.passDefinedKeywordGroups = i2452
  var i2455 = i2447[23]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2455[i + 0]) );
  }
  i2446.variants = i2454
  var i2457 = i2447[24]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2457[i + 0]) );
  }
  i2446.excludedVariants = i2456
  i2446.hasDepthReader = !!i2447[25]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2459 = data
  i2458.val = i2459[0]
  i2458.name = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2461 = data
  i2460.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2461[0], i2460.src)
  i2460.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2461[1], i2460.dst)
  i2460.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2461[2], i2460.op)
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2463 = data
  i2462.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[0], i2462.pass)
  i2462.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[1], i2462.fail)
  i2462.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[2], i2462.zFail)
  i2462.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[3], i2462.comp)
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2467 = data
  i2466.name = i2467[0]
  i2466.value = i2467[1]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( i2473[i + 0] );
  }
  i2470.keywords = i2472
  i2470.hasDiscard = !!i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2477 = data
  i2476.passId = i2477[0]
  i2476.subShaderIndex = i2477[1]
  var i2479 = i2477[2]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( i2479[i + 0] );
  }
  i2476.keywords = i2478
  i2476.vertexProgram = i2477[3]
  i2476.fragmentProgram = i2477[4]
  i2476.exportedForWebGl2 = !!i2477[5]
  i2476.readDepth = !!i2477[6]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'shader')
  i2482.pass = i2483[2]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2487 = data
  i2486.name = i2487[0]
  i2486.type = i2487[1]
  i2486.value = new pc.Vec4( i2487[2], i2487[3], i2487[4], i2487[5] )
  i2486.textureValue = i2487[6]
  i2486.shaderPropertyFlag = i2487[7]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2489 = data
  i2488.name = i2489[0]
  request.r(i2489[1], i2489[2], 0, i2488, 'texture')
  i2488.aabb = i2489[3]
  i2488.vertices = i2489[4]
  i2488.triangles = i2489[5]
  i2488.textureRect = UnityEngine.Rect.MinMaxRect(i2489[6], i2489[7], i2489[8], i2489[9])
  i2488.packedRect = UnityEngine.Rect.MinMaxRect(i2489[10], i2489[11], i2489[12], i2489[13])
  i2488.border = new pc.Vec4( i2489[14], i2489[15], i2489[16], i2489[17] )
  i2488.transparency = i2489[18]
  i2488.bounds = i2489[19]
  i2488.pixelsPerUnit = i2489[20]
  i2488.textureWidth = i2489[21]
  i2488.textureHeight = i2489[22]
  i2488.nativeSize = new pc.Vec2( i2489[23], i2489[24] )
  i2488.pivot = new pc.Vec2( i2489[25], i2489[26] )
  i2488.textureRectOffset = new pc.Vec2( i2489[27], i2489[28] )
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2491 = data
  i2490.name = i2491[0]
  i2490.wrapMode = i2491[1]
  i2490.isLooping = !!i2491[2]
  i2490.length = i2491[3]
  var i2493 = i2491[4]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2493[i + 0]) );
  }
  i2490.curves = i2492
  var i2495 = i2491[5]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2495[i + 0]) );
  }
  i2490.events = i2494
  i2490.halfPrecision = !!i2491[6]
  i2490._frameRate = i2491[7]
  i2490.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2491[8], i2490.localBounds)
  i2490.hasMuscleCurves = !!i2491[9]
  var i2497 = i2491[10]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( i2497[i + 0] );
  }
  i2490.clipMuscleConstant = i2496
  i2490.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2491[11], i2490.clipBindingConstant)
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2501 = data
  i2500.path = i2501[0]
  i2500.hash = i2501[1]
  i2500.componentType = i2501[2]
  i2500.property = i2501[3]
  i2500.keys = i2501[4]
  var i2503 = i2501[5]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2503[i + 0]) );
  }
  i2500.objectReferenceKeys = i2502
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2507 = data
  i2506.time = i2507[0]
  request.r(i2507[1], i2507[2], 0, i2506, 'value')
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2511 = data
  i2510.functionName = i2511[0]
  i2510.floatParameter = i2511[1]
  i2510.intParameter = i2511[2]
  i2510.stringParameter = i2511[3]
  request.r(i2511[4], i2511[5], 0, i2510, 'objectReferenceParameter')
  i2510.time = i2511[6]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2513 = data
  i2512.center = new pc.Vec3( i2513[0], i2513[1], i2513[2] )
  i2512.extends = new pc.Vec3( i2513[3], i2513[4], i2513[5] )
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2517 = data
  var i2519 = i2517[0]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( i2519[i + 0] );
  }
  i2516.genericBindings = i2518
  var i2521 = i2517[1]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( i2521[i + 0] );
  }
  i2516.pptrCurveMapping = i2520
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.ascent = i2523[1]
  i2522.originalLineHeight = i2523[2]
  i2522.fontSize = i2523[3]
  var i2525 = i2523[4]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2525[i + 0]) );
  }
  i2522.characterInfo = i2524
  request.r(i2523[5], i2523[6], 0, i2522, 'texture')
  i2522.originalFontSize = i2523[7]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2529 = data
  i2528.index = i2529[0]
  i2528.advance = i2529[1]
  i2528.bearing = i2529[2]
  i2528.glyphWidth = i2529[3]
  i2528.glyphHeight = i2529[4]
  i2528.minX = i2529[5]
  i2528.maxX = i2529[6]
  i2528.minY = i2529[7]
  i2528.maxY = i2529[8]
  i2528.uvBottomLeftX = i2529[9]
  i2528.uvBottomLeftY = i2529[10]
  i2528.uvBottomRightX = i2529[11]
  i2528.uvBottomRightY = i2529[12]
  i2528.uvTopLeftX = i2529[13]
  i2528.uvTopLeftY = i2529[14]
  i2528.uvTopRightX = i2529[15]
  i2528.uvTopRightY = i2529[16]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2531 = data
  i2530.name = i2531[0]
  var i2533 = i2531[1]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2533[i + 0]) );
  }
  i2530.layers = i2532
  var i2535 = i2531[2]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2535[i + 0]) );
  }
  i2530.parameters = i2534
  i2530.animationClips = i2531[3]
  i2530.avatarUnsupported = i2531[4]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2539 = data
  i2538.name = i2539[0]
  i2538.defaultWeight = i2539[1]
  i2538.blendingMode = i2539[2]
  i2538.avatarMask = i2539[3]
  i2538.syncedLayerIndex = i2539[4]
  i2538.syncedLayerAffectsTiming = !!i2539[5]
  i2538.syncedLayers = i2539[6]
  i2538.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2539[7], i2538.stateMachine)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2541 = data
  i2540.id = i2541[0]
  i2540.name = i2541[1]
  i2540.path = i2541[2]
  var i2543 = i2541[3]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2543[i + 0]) );
  }
  i2540.states = i2542
  var i2545 = i2541[4]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2545[i + 0]) );
  }
  i2540.machines = i2544
  var i2547 = i2541[5]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2547[i + 0]) );
  }
  i2540.entryStateTransitions = i2546
  var i2549 = i2541[6]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2549[i + 0]) );
  }
  i2540.exitStateTransitions = i2548
  var i2551 = i2541[7]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2551[i + 0]) );
  }
  i2540.anyStateTransitions = i2550
  i2540.defaultStateId = i2541[8]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.name = i2555[1]
  i2554.cycleOffset = i2555[2]
  i2554.cycleOffsetParameter = i2555[3]
  i2554.cycleOffsetParameterActive = !!i2555[4]
  i2554.mirror = !!i2555[5]
  i2554.mirrorParameter = i2555[6]
  i2554.mirrorParameterActive = !!i2555[7]
  i2554.motionId = i2555[8]
  i2554.nameHash = i2555[9]
  i2554.fullPathHash = i2555[10]
  i2554.speed = i2555[11]
  i2554.speedParameter = i2555[12]
  i2554.speedParameterActive = !!i2555[13]
  i2554.tag = i2555[14]
  i2554.tagHash = i2555[15]
  i2554.writeDefaultValues = !!i2555[16]
  var i2557 = i2555[17]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 2) {
  request.r(i2557[i + 0], i2557[i + 1], 2, i2556, '')
  }
  i2554.behaviours = i2556
  var i2559 = i2555[18]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2559[i + 0]) );
  }
  i2554.transitions = i2558
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2565 = data
  i2564.fullPath = i2565[0]
  i2564.canTransitionToSelf = !!i2565[1]
  i2564.duration = i2565[2]
  i2564.exitTime = i2565[3]
  i2564.hasExitTime = !!i2565[4]
  i2564.hasFixedDuration = !!i2565[5]
  i2564.interruptionSource = i2565[6]
  i2564.offset = i2565[7]
  i2564.orderedInterruption = !!i2565[8]
  i2564.destinationStateId = i2565[9]
  i2564.isExit = !!i2565[10]
  i2564.mute = !!i2565[11]
  i2564.solo = !!i2565[12]
  var i2567 = i2565[13]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2567[i + 0]) );
  }
  i2564.conditions = i2566
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2573 = data
  i2572.destinationStateId = i2573[0]
  i2572.isExit = !!i2573[1]
  i2572.mute = !!i2573[2]
  i2572.solo = !!i2573[3]
  var i2575 = i2573[4]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2575[i + 0]) );
  }
  i2572.conditions = i2574
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2579 = data
  i2578.defaultBool = !!i2579[0]
  i2578.defaultFloat = i2579[1]
  i2578.defaultInt = i2579[2]
  i2578.name = i2579[3]
  i2578.nameHash = i2579[4]
  i2578.type = i2579[5]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2581 = data
  i2580.name = i2581[0]
  i2580.bytes64 = i2581[1]
  i2580.data = i2581[2]
  return i2580
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2582 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2583 = data
  i2582.useSafeMode = !!i2583[0]
  i2582.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2583[1], i2582.safeModeOptions)
  i2582.timeScale = i2583[2]
  i2582.unscaledTimeScale = i2583[3]
  i2582.useSmoothDeltaTime = !!i2583[4]
  i2582.maxSmoothUnscaledTime = i2583[5]
  i2582.rewindCallbackMode = i2583[6]
  i2582.showUnityEditorReport = !!i2583[7]
  i2582.logBehaviour = i2583[8]
  i2582.drawGizmos = !!i2583[9]
  i2582.defaultRecyclable = !!i2583[10]
  i2582.defaultAutoPlay = i2583[11]
  i2582.defaultUpdateType = i2583[12]
  i2582.defaultTimeScaleIndependent = !!i2583[13]
  i2582.defaultEaseType = i2583[14]
  i2582.defaultEaseOvershootOrAmplitude = i2583[15]
  i2582.defaultEasePeriod = i2583[16]
  i2582.defaultAutoKill = !!i2583[17]
  i2582.defaultLoopType = i2583[18]
  i2582.debugMode = !!i2583[19]
  i2582.debugStoreTargetId = !!i2583[20]
  i2582.showPreviewPanel = !!i2583[21]
  i2582.storeSettingsLocation = i2583[22]
  i2582.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2583[23], i2582.modules)
  i2582.createASMDEF = !!i2583[24]
  i2582.showPlayingTweens = !!i2583[25]
  i2582.showPausedTweens = !!i2583[26]
  return i2582
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2584 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2585 = data
  i2584.logBehaviour = i2585[0]
  i2584.nestedTweenFailureBehaviour = i2585[1]
  return i2584
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2587 = data
  i2586.showPanel = !!i2587[0]
  i2586.audioEnabled = !!i2587[1]
  i2586.physicsEnabled = !!i2587[2]
  i2586.physics2DEnabled = !!i2587[3]
  i2586.spriteEnabled = !!i2587[4]
  i2586.uiEnabled = !!i2587[5]
  i2586.textMeshProEnabled = !!i2587[6]
  i2586.tk2DEnabled = !!i2587[7]
  i2586.deAudioEnabled = !!i2587[8]
  i2586.deUnityExtendedEnabled = !!i2587[9]
  i2586.epoOutlineEnabled = !!i2587[10]
  return i2586
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.TMP_Settings' )
  var i2589 = data
  i2588.m_enableWordWrapping = !!i2589[0]
  i2588.m_enableKerning = !!i2589[1]
  i2588.m_enableExtraPadding = !!i2589[2]
  i2588.m_enableTintAllSprites = !!i2589[3]
  i2588.m_enableParseEscapeCharacters = !!i2589[4]
  i2588.m_EnableRaycastTarget = !!i2589[5]
  i2588.m_GetFontFeaturesAtRuntime = !!i2589[6]
  i2588.m_missingGlyphCharacter = i2589[7]
  i2588.m_warningsDisabled = !!i2589[8]
  request.r(i2589[9], i2589[10], 0, i2588, 'm_defaultFontAsset')
  i2588.m_defaultFontAssetPath = i2589[11]
  i2588.m_defaultFontSize = i2589[12]
  i2588.m_defaultAutoSizeMinRatio = i2589[13]
  i2588.m_defaultAutoSizeMaxRatio = i2589[14]
  i2588.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2589[15], i2589[16] )
  i2588.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2589[17], i2589[18] )
  i2588.m_autoSizeTextContainer = !!i2589[19]
  i2588.m_IsTextObjectScaleStatic = !!i2589[20]
  var i2591 = i2589[21]
  var i2590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2591.length; i += 2) {
  request.r(i2591[i + 0], i2591[i + 1], 1, i2590, '')
  }
  i2588.m_fallbackFontAssets = i2590
  i2588.m_matchMaterialPreset = !!i2589[22]
  request.r(i2589[23], i2589[24], 0, i2588, 'm_defaultSpriteAsset')
  i2588.m_defaultSpriteAssetPath = i2589[25]
  i2588.m_enableEmojiSupport = !!i2589[26]
  i2588.m_MissingCharacterSpriteUnicode = i2589[27]
  i2588.m_defaultColorGradientPresetsPath = i2589[28]
  request.r(i2589[29], i2589[30], 0, i2588, 'm_defaultStyleSheet')
  i2588.m_StyleSheetsResourcePath = i2589[31]
  request.r(i2589[32], i2589[33], 0, i2588, 'm_leadingCharacters')
  request.r(i2589[34], i2589[35], 0, i2588, 'm_followingCharacters')
  i2588.m_UseModernHangulLineBreakingRules = !!i2589[36]
  return i2588
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2595 = data
  i2594.hashCode = i2595[0]
  request.r(i2595[1], i2595[2], 0, i2594, 'material')
  i2594.materialHashCode = i2595[3]
  request.r(i2595[4], i2595[5], 0, i2594, 'atlas')
  i2594.normalStyle = i2595[6]
  i2594.normalSpacingOffset = i2595[7]
  i2594.boldStyle = i2595[8]
  i2594.boldSpacing = i2595[9]
  i2594.italicStyle = i2595[10]
  i2594.tabSize = i2595[11]
  i2594.m_Version = i2595[12]
  i2594.m_SourceFontFileGUID = i2595[13]
  request.r(i2595[14], i2595[15], 0, i2594, 'm_SourceFontFile_EditorRef')
  request.r(i2595[16], i2595[17], 0, i2594, 'm_SourceFontFile')
  i2594.m_AtlasPopulationMode = i2595[18]
  i2594.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2595[19], i2594.m_FaceInfo)
  var i2597 = i2595[20]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('UnityEngine.TextCore.Glyph', i2597[i + 0]));
  }
  i2594.m_GlyphTable = i2596
  var i2599 = i2595[21]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('TMPro.TMP_Character', i2599[i + 0]));
  }
  i2594.m_CharacterTable = i2598
  var i2601 = i2595[22]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 2) {
  request.r(i2601[i + 0], i2601[i + 1], 2, i2600, '')
  }
  i2594.m_AtlasTextures = i2600
  i2594.m_AtlasTextureIndex = i2595[23]
  i2594.m_IsMultiAtlasTexturesEnabled = !!i2595[24]
  i2594.m_ClearDynamicDataOnBuild = !!i2595[25]
  var i2603 = i2595[26]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('UnityEngine.TextCore.GlyphRect', i2603[i + 0]));
  }
  i2594.m_UsedGlyphRects = i2602
  var i2605 = i2595[27]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('UnityEngine.TextCore.GlyphRect', i2605[i + 0]));
  }
  i2594.m_FreeGlyphRects = i2604
  i2594.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2595[28], i2594.m_fontInfo)
  i2594.m_AtlasWidth = i2595[29]
  i2594.m_AtlasHeight = i2595[30]
  i2594.m_AtlasPadding = i2595[31]
  i2594.m_AtlasRenderMode = i2595[32]
  var i2607 = i2595[33]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.add(request.d('TMPro.TMP_Glyph', i2607[i + 0]));
  }
  i2594.m_glyphInfoList = i2606
  i2594.m_KerningTable = request.d('TMPro.KerningTable', i2595[34], i2594.m_KerningTable)
  i2594.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2595[35], i2594.m_FontFeatureTable)
  var i2609 = i2595[36]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2609.length; i += 2) {
  request.r(i2609[i + 0], i2609[i + 1], 1, i2608, '')
  }
  i2594.fallbackFontAssets = i2608
  var i2611 = i2595[37]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2611.length; i += 2) {
  request.r(i2611[i + 0], i2611[i + 1], 1, i2610, '')
  }
  i2594.m_FallbackFontAssetTable = i2610
  i2594.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2595[38], i2594.m_CreationSettings)
  var i2613 = i2595[39]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('TMPro.TMP_FontWeightPair', i2613[i + 0]) );
  }
  i2594.m_FontWeightTable = i2612
  var i2615 = i2595[40]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('TMPro.TMP_FontWeightPair', i2615[i + 0]) );
  }
  i2594.fontWeights = i2614
  return i2594
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2617 = data
  i2616.m_FaceIndex = i2617[0]
  i2616.m_FamilyName = i2617[1]
  i2616.m_StyleName = i2617[2]
  i2616.m_PointSize = i2617[3]
  i2616.m_Scale = i2617[4]
  i2616.m_UnitsPerEM = i2617[5]
  i2616.m_LineHeight = i2617[6]
  i2616.m_AscentLine = i2617[7]
  i2616.m_CapLine = i2617[8]
  i2616.m_MeanLine = i2617[9]
  i2616.m_Baseline = i2617[10]
  i2616.m_DescentLine = i2617[11]
  i2616.m_SuperscriptOffset = i2617[12]
  i2616.m_SuperscriptSize = i2617[13]
  i2616.m_SubscriptOffset = i2617[14]
  i2616.m_SubscriptSize = i2617[15]
  i2616.m_UnderlineOffset = i2617[16]
  i2616.m_UnderlineThickness = i2617[17]
  i2616.m_StrikethroughOffset = i2617[18]
  i2616.m_StrikethroughThickness = i2617[19]
  i2616.m_TabWidth = i2617[20]
  return i2616
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2621 = data
  i2620.m_Index = i2621[0]
  i2620.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2621[1], i2620.m_Metrics)
  i2620.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2621[2], i2620.m_GlyphRect)
  i2620.m_Scale = i2621[3]
  i2620.m_AtlasIndex = i2621[4]
  i2620.m_ClassDefinitionType = i2621[5]
  return i2620
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2623 = data
  i2622.m_Width = i2623[0]
  i2622.m_Height = i2623[1]
  i2622.m_HorizontalBearingX = i2623[2]
  i2622.m_HorizontalBearingY = i2623[3]
  i2622.m_HorizontalAdvance = i2623[4]
  return i2622
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2625 = data
  i2624.m_X = i2625[0]
  i2624.m_Y = i2625[1]
  i2624.m_Width = i2625[2]
  i2624.m_Height = i2625[3]
  return i2624
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2628 = root || request.c( 'TMPro.TMP_Character' )
  var i2629 = data
  i2628.m_ElementType = i2629[0]
  i2628.m_Unicode = i2629[1]
  i2628.m_GlyphIndex = i2629[2]
  i2628.m_Scale = i2629[3]
  return i2628
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2635 = data
  i2634.Name = i2635[0]
  i2634.PointSize = i2635[1]
  i2634.Scale = i2635[2]
  i2634.CharacterCount = i2635[3]
  i2634.LineHeight = i2635[4]
  i2634.Baseline = i2635[5]
  i2634.Ascender = i2635[6]
  i2634.CapHeight = i2635[7]
  i2634.Descender = i2635[8]
  i2634.CenterLine = i2635[9]
  i2634.SuperscriptOffset = i2635[10]
  i2634.SubscriptOffset = i2635[11]
  i2634.SubSize = i2635[12]
  i2634.Underline = i2635[13]
  i2634.UnderlineThickness = i2635[14]
  i2634.strikethrough = i2635[15]
  i2634.strikethroughThickness = i2635[16]
  i2634.TabWidth = i2635[17]
  i2634.Padding = i2635[18]
  i2634.AtlasWidth = i2635[19]
  i2634.AtlasHeight = i2635[20]
  return i2634
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.x = i2639[1]
  i2638.y = i2639[2]
  i2638.width = i2639[3]
  i2638.height = i2639[4]
  i2638.xOffset = i2639[5]
  i2638.yOffset = i2639[6]
  i2638.xAdvance = i2639[7]
  i2638.scale = i2639[8]
  return i2638
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.KerningTable' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.KerningPair', i2643[i + 0]));
  }
  i2640.kerningPairs = i2642
  return i2640
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.KerningPair' )
  var i2647 = data
  i2646.xOffset = i2647[0]
  i2646.m_FirstGlyph = i2647[1]
  i2646.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2647[2], i2646.m_FirstGlyphAdjustments)
  i2646.m_SecondGlyph = i2647[3]
  i2646.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2647[4], i2646.m_SecondGlyphAdjustments)
  i2646.m_IgnoreSpacingAdjustments = !!i2647[5]
  return i2646
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2649 = data
  var i2651 = i2649[0]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2651[i + 0]));
  }
  i2648.m_GlyphPairAdjustmentRecords = i2650
  return i2648
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2655 = data
  i2654.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2655[0], i2654.m_FirstAdjustmentRecord)
  i2654.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2655[1], i2654.m_SecondAdjustmentRecord)
  i2654.m_FeatureLookupFlags = i2655[2]
  return i2654
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2657 = data
  i2656.m_GlyphIndex = i2657[0]
  i2656.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2657[1], i2656.m_GlyphValueRecord)
  return i2656
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2659 = data
  i2658.m_XPlacement = i2659[0]
  i2658.m_YPlacement = i2659[1]
  i2658.m_XAdvance = i2659[2]
  i2658.m_YAdvance = i2659[3]
  return i2658
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2661 = data
  i2660.sourceFontFileName = i2661[0]
  i2660.sourceFontFileGUID = i2661[1]
  i2660.pointSizeSamplingMode = i2661[2]
  i2660.pointSize = i2661[3]
  i2660.padding = i2661[4]
  i2660.packingMode = i2661[5]
  i2660.atlasWidth = i2661[6]
  i2660.atlasHeight = i2661[7]
  i2660.characterSetSelectionMode = i2661[8]
  i2660.characterSequence = i2661[9]
  i2660.referencedFontAssetGUID = i2661[10]
  i2660.referencedTextAssetGUID = i2661[11]
  i2660.fontStyle = i2661[12]
  i2660.fontStyleModifier = i2661[13]
  i2660.renderMode = i2661[14]
  i2660.includeFontFeatures = !!i2661[15]
  return i2660
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'regularTypeface')
  request.r(i2665[2], i2665[3], 0, i2664, 'italicTypeface')
  return i2664
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2667 = data
  i2666.hashCode = i2667[0]
  request.r(i2667[1], i2667[2], 0, i2666, 'material')
  i2666.materialHashCode = i2667[3]
  request.r(i2667[4], i2667[5], 0, i2666, 'spriteSheet')
  var i2669 = i2667[6]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.TMP_Sprite', i2669[i + 0]));
  }
  i2666.spriteInfoList = i2668
  var i2671 = i2667[7]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 1, i2670, '')
  }
  i2666.fallbackSpriteAssets = i2670
  i2666.m_Version = i2667[8]
  i2666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2667[9], i2666.m_FaceInfo)
  var i2673 = i2667[10]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.TMP_SpriteCharacter', i2673[i + 0]));
  }
  i2666.m_SpriteCharacterTable = i2672
  var i2675 = i2667[11]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_SpriteGlyph', i2675[i + 0]));
  }
  i2666.m_SpriteGlyphTable = i2674
  return i2666
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.hashCode = i2679[1]
  i2678.unicode = i2679[2]
  i2678.pivot = new pc.Vec2( i2679[3], i2679[4] )
  request.r(i2679[5], i2679[6], 0, i2678, 'sprite')
  i2678.id = i2679[7]
  i2678.x = i2679[8]
  i2678.y = i2679[9]
  i2678.width = i2679[10]
  i2678.height = i2679[11]
  i2678.xOffset = i2679[12]
  i2678.yOffset = i2679[13]
  i2678.xAdvance = i2679[14]
  i2678.scale = i2679[15]
  return i2678
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2685 = data
  i2684.m_Name = i2685[0]
  i2684.m_HashCode = i2685[1]
  i2684.m_ElementType = i2685[2]
  i2684.m_Unicode = i2685[3]
  i2684.m_GlyphIndex = i2685[4]
  i2684.m_Scale = i2685[5]
  return i2684
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'sprite')
  i2688.m_Index = i2689[2]
  i2688.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2689[3], i2688.m_Metrics)
  i2688.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2689[4], i2688.m_GlyphRect)
  i2688.m_Scale = i2689[5]
  i2688.m_AtlasIndex = i2689[6]
  i2688.m_ClassDefinitionType = i2689[7]
  return i2688
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2691 = data
  var i2693 = i2691[0]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Style', i2693[i + 0]));
  }
  i2690.m_StyleList = i2692
  return i2690
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_Style' )
  var i2697 = data
  i2696.m_Name = i2697[0]
  i2696.m_HashCode = i2697[1]
  i2696.m_OpeningDefinition = i2697[2]
  i2696.m_ClosingDefinition = i2697[3]
  i2696.m_OpeningTagArray = i2697[4]
  i2696.m_ClosingTagArray = i2697[5]
  i2696.m_OpeningTagUnicodeArray = i2697[6]
  i2696.m_ClosingTagUnicodeArray = i2697[7]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2701[i + 0]) );
  }
  i2698.files = i2700
  i2698.componentToPrefabIds = i2699[1]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2705 = data
  i2704.path = i2705[0]
  request.r(i2705[1], i2705[2], 0, i2704, 'unityObject')
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2709[i + 0]) );
  }
  i2706.scriptsExecutionOrder = i2708
  var i2711 = i2707[1]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2711[i + 0]) );
  }
  i2706.sortingLayers = i2710
  var i2713 = i2707[2]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2713[i + 0]) );
  }
  i2706.cullingLayers = i2712
  i2706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2707[3], i2706.timeSettings)
  i2706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2707[4], i2706.physicsSettings)
  i2706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2707[5], i2706.physics2DSettings)
  i2706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2707[6], i2706.qualitySettings)
  i2706.enableRealtimeShadows = !!i2707[7]
  i2706.enableAutoInstancing = !!i2707[8]
  i2706.enableDynamicBatching = !!i2707[9]
  i2706.lightmapEncodingQuality = i2707[10]
  i2706.desiredColorSpace = i2707[11]
  var i2715 = i2707[12]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2706.allTags = i2714
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.value = i2719[1]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2723 = data
  i2722.id = i2723[0]
  i2722.name = i2723[1]
  i2722.value = i2723[2]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2727 = data
  i2726.id = i2727[0]
  i2726.name = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2729 = data
  i2728.fixedDeltaTime = i2729[0]
  i2728.maximumDeltaTime = i2729[1]
  i2728.timeScale = i2729[2]
  i2728.maximumParticleTimestep = i2729[3]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2731 = data
  i2730.gravity = new pc.Vec3( i2731[0], i2731[1], i2731[2] )
  i2730.defaultSolverIterations = i2731[3]
  i2730.bounceThreshold = i2731[4]
  i2730.autoSyncTransforms = !!i2731[5]
  i2730.autoSimulation = !!i2731[6]
  var i2733 = i2731[7]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2733[i + 0]) );
  }
  i2730.collisionMatrix = i2732
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.layerId = i2737[1]
  i2736.otherLayerId = i2737[2]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'material')
  i2738.gravity = new pc.Vec2( i2739[2], i2739[3] )
  i2738.positionIterations = i2739[4]
  i2738.velocityIterations = i2739[5]
  i2738.velocityThreshold = i2739[6]
  i2738.maxLinearCorrection = i2739[7]
  i2738.maxAngularCorrection = i2739[8]
  i2738.maxTranslationSpeed = i2739[9]
  i2738.maxRotationSpeed = i2739[10]
  i2738.baumgarteScale = i2739[11]
  i2738.baumgarteTOIScale = i2739[12]
  i2738.timeToSleep = i2739[13]
  i2738.linearSleepTolerance = i2739[14]
  i2738.angularSleepTolerance = i2739[15]
  i2738.defaultContactOffset = i2739[16]
  i2738.autoSimulation = !!i2739[17]
  i2738.queriesHitTriggers = !!i2739[18]
  i2738.queriesStartInColliders = !!i2739[19]
  i2738.callbacksOnDisable = !!i2739[20]
  i2738.reuseCollisionCallbacks = !!i2739[21]
  i2738.autoSyncTransforms = !!i2739[22]
  var i2741 = i2739[23]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2741[i + 0]) );
  }
  i2738.collisionMatrix = i2740
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.layerId = i2745[1]
  i2744.otherLayerId = i2745[2]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2747 = data
  var i2749 = i2747[0]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2749[i + 0]) );
  }
  i2746.qualityLevels = i2748
  var i2751 = i2747[1]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2746.names = i2750
  i2746.shadows = i2747[2]
  i2746.anisotropicFiltering = i2747[3]
  i2746.antiAliasing = i2747[4]
  i2746.lodBias = i2747[5]
  i2746.shadowCascades = i2747[6]
  i2746.shadowDistance = i2747[7]
  i2746.shadowmaskMode = i2747[8]
  i2746.shadowProjection = i2747[9]
  i2746.shadowResolution = i2747[10]
  i2746.softParticles = !!i2747[11]
  i2746.softVegetation = !!i2747[12]
  i2746.activeColorSpace = i2747[13]
  i2746.desiredColorSpace = i2747[14]
  i2746.masterTextureLimit = i2747[15]
  i2746.maxQueuedFrames = i2747[16]
  i2746.particleRaycastBudget = i2747[17]
  i2746.pixelLightCount = i2747[18]
  i2746.realtimeReflectionProbes = !!i2747[19]
  i2746.shadowCascade2Split = i2747[20]
  i2746.shadowCascade4Split = new pc.Vec3( i2747[21], i2747[22], i2747[23] )
  i2746.streamingMipmapsActive = !!i2747[24]
  i2746.vSyncCount = i2747[25]
  i2746.asyncUploadBufferSize = i2747[26]
  i2746.asyncUploadTimeSlice = i2747[27]
  i2746.billboardsFaceCameraPosition = !!i2747[28]
  i2746.shadowNearPlaneOffset = i2747[29]
  i2746.streamingMipmapsMemoryBudget = i2747[30]
  i2746.maximumLODLevel = i2747[31]
  i2746.streamingMipmapsAddAllCameras = !!i2747[32]
  i2746.streamingMipmapsMaxLevelReduction = i2747[33]
  i2746.streamingMipmapsRenderersPerFrame = i2747[34]
  i2746.resolutionScalingFixedDPIFactor = i2747[35]
  i2746.streamingMipmapsMaxFileIORequests = i2747[36]
  i2746.currentQualityLevel = i2747[37]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2757 = data
  i2756.mode = i2757[0]
  i2756.parameter = i2757[1]
  i2756.threshold = i2757[2]
  return i2756
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2759 = data
  i2758.xPlacement = i2759[0]
  i2758.yPlacement = i2759[1]
  i2758.xAdvance = i2759[2]
  i2758.yAdvance = i2759[3]
  return i2758
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D":{"enabled":0,"useColliderMask":1,"colliderMask":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[28],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[6],"105":[6],"106":[6],"107":[6],"108":[6],"109":[6],"110":[6],"111":[6],"112":[6],"113":[6],"114":[6],"115":[6],"116":[6],"117":[28],"118":[119],"120":[121],"122":[121],"32":[13],"8":[6],"123":[14,21,13],"58":[13],"124":[28],"31":[28],"125":[126],"127":[128],"129":[13],"130":[13],"34":[32],"16":[14,13],"131":[13],"33":[32],"41":[13],"132":[13],"65":[13],"133":[13],"45":[13],"134":[13],"40":[13],"47":[13],"135":[13],"136":[14,13],"137":[13],"46":[13],"44":[13],"138":[13],"24":[14,13],"51":[13],"139":[37],"140":[37],"38":[37],"141":[37],"142":[28],"143":[28],"144":[128],"145":[13],"146":[119,13],"147":[13,14],"148":[13],"149":[14,13],"150":[119],"151":[14,13],"152":[13],"153":[128]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","PlayerController","GameManager","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.EdgeCollider2D","PlatformScript","UnityEngine.PlatformEffector2D","Shroom","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Winner","UnityEngine.UI.Text","UnityEngine.Texture2D","PauseManager","LevelGenerator","UnityEngine.Camera","UnityEngine.AudioListener","CamraFollow","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 06:03:32";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "4f3bdd7a-4f41-481d-8e27-020ef0d196c9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

