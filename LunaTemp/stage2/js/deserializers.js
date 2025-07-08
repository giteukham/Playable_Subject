var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointSpring' )
  var i2047 = data
  i2046.spring = i2047[0]
  i2046.damper = i2047[1]
  i2046.targetPosition = i2047[2]
  return i2046
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointMotor' )
  var i2049 = data
  i2048.m_TargetVelocity = i2049[0]
  i2048.m_Force = i2049[1]
  i2048.m_FreeSpin = i2049[2]
  return i2048
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointLimits' )
  var i2051 = data
  i2050.m_Min = i2051[0]
  i2050.m_Max = i2051[1]
  i2050.m_Bounciness = i2051[2]
  i2050.m_BounceMinVelocity = i2051[3]
  i2050.m_ContactDistance = i2051[4]
  i2050.minBounce = i2051[5]
  i2050.maxBounce = i2051[6]
  return i2050
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointDrive' )
  var i2053 = data
  i2052.m_PositionSpring = i2053[0]
  i2052.m_PositionDamper = i2053[1]
  i2052.m_MaximumForce = i2053[2]
  i2052.m_UseAcceleration = i2053[3]
  return i2052
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2055 = data
  i2054.m_Spring = i2055[0]
  i2054.m_Damper = i2055[1]
  return i2054
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2057 = data
  i2056.m_Limit = i2057[0]
  i2056.m_Bounciness = i2057[1]
  i2056.m_ContactDistance = i2057[2]
  return i2056
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2059 = data
  i2058.m_ExtremumSlip = i2059[0]
  i2058.m_ExtremumValue = i2059[1]
  i2058.m_AsymptoteSlip = i2059[2]
  i2058.m_AsymptoteValue = i2059[3]
  i2058.m_Stiffness = i2059[4]
  return i2058
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2061 = data
  i2060.m_LowerAngle = i2061[0]
  i2060.m_UpperAngle = i2061[1]
  return i2060
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2063 = data
  i2062.m_MotorSpeed = i2063[0]
  i2062.m_MaximumMotorTorque = i2063[1]
  return i2062
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2065 = data
  i2064.m_DampingRatio = i2065[0]
  i2064.m_Frequency = i2065[1]
  i2064.m_Angle = i2065[2]
  return i2064
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2067 = data
  i2066.m_LowerTranslation = i2067[0]
  i2066.m_UpperTranslation = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2069 = data
  i2068.position = new pc.Vec3( i2069[0], i2069[1], i2069[2] )
  i2068.scale = new pc.Vec3( i2069[3], i2069[4], i2069[5] )
  i2068.rotation = new pc.Quat(i2069[6], i2069[7], i2069[8], i2069[9])
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2071 = data
  i2070.name = i2071[0]
  i2070.tagId = i2071[1]
  i2070.enabled = !!i2071[2]
  i2070.isStatic = !!i2071[3]
  i2070.layer = i2071[4]
  return i2070
}

Deserializers["Slot"] = function (request, data, root) {
  var i2072 = root || request.c( 'Slot' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'placedStuff')
  i2072.isCorrectlyFilled = !!i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'sharedMesh')
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'additionalVertexStreams')
  i2076.enabled = !!i2077[2]
  request.r(i2077[3], i2077[4], 0, i2076, 'sharedMaterial')
  var i2079 = i2077[5]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 2, i2078, '')
  }
  i2076.sharedMaterials = i2078
  i2076.receiveShadows = !!i2077[6]
  i2076.shadowCastingMode = i2077[7]
  i2076.sortingLayerID = i2077[8]
  i2076.sortingOrder = i2077[9]
  i2076.lightmapIndex = i2077[10]
  i2076.lightmapSceneIndex = i2077[11]
  i2076.lightmapScaleOffset = new pc.Vec4( i2077[12], i2077[13], i2077[14], i2077[15] )
  i2076.lightProbeUsage = i2077[16]
  i2076.reflectionProbeUsage = i2077[17]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2083 = data
  i2082.center = new pc.Vec3( i2083[0], i2083[1], i2083[2] )
  i2082.size = new pc.Vec3( i2083[3], i2083[4], i2083[5] )
  i2082.enabled = !!i2083[6]
  i2082.isTrigger = !!i2083[7]
  request.r(i2083[8], i2083[9], 0, i2082, 'material')
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2085 = data
  i2084.name = i2085[0]
  i2084.halfPrecision = !!i2085[1]
  i2084.useUInt32IndexFormat = !!i2085[2]
  i2084.vertexCount = i2085[3]
  i2084.aabb = i2085[4]
  var i2087 = i2085[5]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( !!i2087[i + 0] );
  }
  i2084.streams = i2086
  i2084.vertices = i2085[6]
  var i2089 = i2085[7]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2089[i + 0]) );
  }
  i2084.subMeshes = i2088
  var i2091 = i2085[8]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 16) {
    i2090.push( new pc.Mat4().setData(i2091[i + 0], i2091[i + 1], i2091[i + 2], i2091[i + 3],  i2091[i + 4], i2091[i + 5], i2091[i + 6], i2091[i + 7],  i2091[i + 8], i2091[i + 9], i2091[i + 10], i2091[i + 11],  i2091[i + 12], i2091[i + 13], i2091[i + 14], i2091[i + 15]) );
  }
  i2084.bindposes = i2090
  var i2093 = i2085[9]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2093[i + 0]) );
  }
  i2084.blendShapes = i2092
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2099 = data
  i2098.triangles = i2099[0]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2105 = data
  i2104.name = i2105[0]
  var i2107 = i2105[1]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2107[i + 0]) );
  }
  i2104.frames = i2106
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2108 = root || new pc.UnityMaterial()
  var i2109 = data
  i2108.name = i2109[0]
  request.r(i2109[1], i2109[2], 0, i2108, 'shader')
  i2108.renderQueue = i2109[3]
  i2108.enableInstancing = !!i2109[4]
  var i2111 = i2109[5]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2111[i + 0]) );
  }
  i2108.floatParameters = i2110
  var i2113 = i2109[6]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2113[i + 0]) );
  }
  i2108.colorParameters = i2112
  var i2115 = i2109[7]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2115[i + 0]) );
  }
  i2108.vectorParameters = i2114
  var i2117 = i2109[8]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2117[i + 0]) );
  }
  i2108.textureParameters = i2116
  var i2119 = i2109[9]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2119[i + 0]) );
  }
  i2108.materialFlags = i2118
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.value = i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.value = new pc.Color(i2127[1], i2127[2], i2127[3], i2127[4])
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.value = new pc.Vec4( i2131[1], i2131[2], i2131[3], i2131[4] )
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2135 = data
  i2134.name = i2135[0]
  request.r(i2135[1], i2135[2], 0, i2134, 'value')
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.enabled = !!i2139[1]
  return i2138
}

Deserializers["Stuff"] = function (request, data, root) {
  var i2140 = root || request.c( 'Stuff' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, '_renderer')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.width = i2143[1]
  i2142.height = i2143[2]
  i2142.mipmapCount = i2143[3]
  i2142.anisoLevel = i2143[4]
  i2142.filterMode = i2143[5]
  i2142.hdr = !!i2143[6]
  i2142.format = i2143[7]
  i2142.wrapMode = i2143[8]
  i2142.alphaIsTransparency = !!i2143[9]
  i2142.alphaSource = i2143[10]
  i2142.graphicsFormat = i2143[11]
  i2142.sRGBTexture = !!i2143[12]
  i2142.desiredColorSpace = i2143[13]
  i2142.wrapU = i2143[14]
  i2142.wrapV = i2143[15]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2145 = data
  i2144.pivot = new pc.Vec2( i2145[0], i2145[1] )
  i2144.anchorMin = new pc.Vec2( i2145[2], i2145[3] )
  i2144.anchorMax = new pc.Vec2( i2145[4], i2145[5] )
  i2144.sizeDelta = new pc.Vec2( i2145[6], i2145[7] )
  i2144.anchoredPosition3D = new pc.Vec3( i2145[8], i2145[9], i2145[10] )
  i2144.rotation = new pc.Quat(i2145[11], i2145[12], i2145[13], i2145[14])
  i2144.scale = new pc.Vec3( i2145[15], i2145[16], i2145[17] )
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2147 = data
  i2146.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2147[0], i2146.main)
  i2146.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2147[1], i2146.colorBySpeed)
  i2146.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2147[2], i2146.colorOverLifetime)
  i2146.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2147[3], i2146.emission)
  i2146.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2147[4], i2146.rotationBySpeed)
  i2146.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2147[5], i2146.rotationOverLifetime)
  i2146.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2147[6], i2146.shape)
  i2146.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2147[7], i2146.sizeBySpeed)
  i2146.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2147[8], i2146.sizeOverLifetime)
  i2146.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2147[9], i2146.textureSheetAnimation)
  i2146.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2147[10], i2146.velocityOverLifetime)
  i2146.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2147[11], i2146.noise)
  i2146.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2147[12], i2146.inheritVelocity)
  i2146.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2147[13], i2146.forceOverLifetime)
  i2146.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2147[14], i2146.limitVelocityOverLifetime)
  i2146.useAutoRandomSeed = !!i2147[15]
  i2146.randomSeed = i2147[16]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemMain()
  var i2149 = data
  i2148.duration = i2149[0]
  i2148.loop = !!i2149[1]
  i2148.prewarm = !!i2149[2]
  i2148.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[3], i2148.startDelay)
  i2148.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[4], i2148.startLifetime)
  i2148.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[5], i2148.startSpeed)
  i2148.startSize3D = !!i2149[6]
  i2148.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[7], i2148.startSizeX)
  i2148.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[8], i2148.startSizeY)
  i2148.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[9], i2148.startSizeZ)
  i2148.startRotation3D = !!i2149[10]
  i2148.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[11], i2148.startRotationX)
  i2148.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[12], i2148.startRotationY)
  i2148.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[13], i2148.startRotationZ)
  i2148.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2149[14], i2148.startColor)
  i2148.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[15], i2148.gravityModifier)
  i2148.simulationSpace = i2149[16]
  request.r(i2149[17], i2149[18], 0, i2148, 'customSimulationSpace')
  i2148.simulationSpeed = i2149[19]
  i2148.useUnscaledTime = !!i2149[20]
  i2148.scalingMode = i2149[21]
  i2148.playOnAwake = !!i2149[22]
  i2148.maxParticles = i2149[23]
  i2148.emitterVelocityMode = i2149[24]
  i2148.stopAction = i2149[25]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2150 = root || new pc.MinMaxCurve()
  var i2151 = data
  i2150.mode = i2151[0]
  i2150.curveMin = new pc.AnimationCurve( { keys_flow: i2151[1] } )
  i2150.curveMax = new pc.AnimationCurve( { keys_flow: i2151[2] } )
  i2150.curveMultiplier = i2151[3]
  i2150.constantMin = i2151[4]
  i2150.constantMax = i2151[5]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2152 = root || new pc.MinMaxGradient()
  var i2153 = data
  i2152.mode = i2153[0]
  i2152.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2153[1], i2152.gradientMin)
  i2152.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2153[2], i2152.gradientMax)
  i2152.colorMin = new pc.Color(i2153[3], i2153[4], i2153[5], i2153[6])
  i2152.colorMax = new pc.Color(i2153[7], i2153[8], i2153[9], i2153[10])
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2155 = data
  i2154.mode = i2155[0]
  var i2157 = i2155[1]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2157[i + 0]) );
  }
  i2154.colorKeys = i2156
  var i2159 = i2155[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2159[i + 0]) );
  }
  i2154.alphaKeys = i2158
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemColorBySpeed()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2161[1], i2160.color)
  i2160.range = new pc.Vec2( i2161[2], i2161[3] )
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2165 = data
  i2164.color = new pc.Color(i2165[0], i2165[1], i2165[2], i2165[3])
  i2164.time = i2165[4]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2169 = data
  i2168.alpha = i2169[0]
  i2168.time = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemColorOverLifetime()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2171[1], i2170.color)
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemEmitter()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[1], i2172.rateOverTime)
  i2172.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[2], i2172.rateOverDistance)
  var i2175 = i2173[3]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2175[i + 0]) );
  }
  i2172.bursts = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemBurst()
  var i2179 = data
  i2178.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[0], i2178.count)
  i2178.cycleCount = i2179[1]
  i2178.minCount = i2179[2]
  i2178.maxCount = i2179[3]
  i2178.repeatInterval = i2179[4]
  i2178.time = i2179[5]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemRotationBySpeed()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[1], i2180.x)
  i2180.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[2], i2180.y)
  i2180.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[3], i2180.z)
  i2180.separateAxes = !!i2181[4]
  i2180.range = new pc.Vec2( i2181[5], i2181[6] )
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[1], i2182.x)
  i2182.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[2], i2182.y)
  i2182.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[3], i2182.z)
  i2182.separateAxes = !!i2183[4]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemShape()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.shapeType = i2185[1]
  i2184.randomDirectionAmount = i2185[2]
  i2184.sphericalDirectionAmount = i2185[3]
  i2184.randomPositionAmount = i2185[4]
  i2184.alignToDirection = !!i2185[5]
  i2184.radius = i2185[6]
  i2184.radiusMode = i2185[7]
  i2184.radiusSpread = i2185[8]
  i2184.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[9], i2184.radiusSpeed)
  i2184.radiusThickness = i2185[10]
  i2184.angle = i2185[11]
  i2184.length = i2185[12]
  i2184.boxThickness = new pc.Vec3( i2185[13], i2185[14], i2185[15] )
  i2184.meshShapeType = i2185[16]
  request.r(i2185[17], i2185[18], 0, i2184, 'mesh')
  request.r(i2185[19], i2185[20], 0, i2184, 'meshRenderer')
  request.r(i2185[21], i2185[22], 0, i2184, 'skinnedMeshRenderer')
  i2184.useMeshMaterialIndex = !!i2185[23]
  i2184.meshMaterialIndex = i2185[24]
  i2184.useMeshColors = !!i2185[25]
  i2184.normalOffset = i2185[26]
  i2184.arc = i2185[27]
  i2184.arcMode = i2185[28]
  i2184.arcSpread = i2185[29]
  i2184.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[30], i2184.arcSpeed)
  i2184.donutRadius = i2185[31]
  i2184.position = new pc.Vec3( i2185[32], i2185[33], i2185[34] )
  i2184.rotation = new pc.Vec3( i2185[35], i2185[36], i2185[37] )
  i2184.scale = new pc.Vec3( i2185[38], i2185[39], i2185[40] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemSizeBySpeed()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.separateAxes = !!i2187[4]
  i2186.range = new pc.Vec2( i2187[5], i2187[6] )
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[1], i2188.x)
  i2188.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[2], i2188.y)
  i2188.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[3], i2188.z)
  i2188.separateAxes = !!i2189[4]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.mode = i2191[1]
  i2190.animation = i2191[2]
  i2190.numTilesX = i2191[3]
  i2190.numTilesY = i2191[4]
  i2190.useRandomRow = !!i2191[5]
  i2190.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[6], i2190.frameOverTime)
  i2190.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[7], i2190.startFrame)
  i2190.cycleCount = i2191[8]
  i2190.rowIndex = i2191[9]
  i2190.flipU = i2191[10]
  i2190.flipV = i2191[11]
  i2190.spriteCount = i2191[12]
  var i2193 = i2191[13]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2190.sprites = i2192
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[1], i2196.x)
  i2196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.y)
  i2196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[3], i2196.z)
  i2196.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[4], i2196.radial)
  i2196.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[5], i2196.speedModifier)
  i2196.space = i2197[6]
  i2196.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[7], i2196.orbitalX)
  i2196.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[8], i2196.orbitalY)
  i2196.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[9], i2196.orbitalZ)
  i2196.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[10], i2196.orbitalOffsetX)
  i2196.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[11], i2196.orbitalOffsetY)
  i2196.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[12], i2196.orbitalOffsetZ)
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemNoise()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.separateAxes = !!i2199[1]
  i2198.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.strengthX)
  i2198.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[3], i2198.strengthY)
  i2198.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[4], i2198.strengthZ)
  i2198.frequency = i2199[5]
  i2198.damping = !!i2199[6]
  i2198.octaveCount = i2199[7]
  i2198.octaveMultiplier = i2199[8]
  i2198.octaveScale = i2199[9]
  i2198.quality = i2199[10]
  i2198.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[11], i2198.scrollSpeed)
  i2198.scrollSpeedMultiplier = i2199[12]
  i2198.remapEnabled = !!i2199[13]
  i2198.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[14], i2198.remapX)
  i2198.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[15], i2198.remapY)
  i2198.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[16], i2198.remapZ)
  i2198.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[17], i2198.positionAmount)
  i2198.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[18], i2198.rotationAmount)
  i2198.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[19], i2198.sizeAmount)
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemInheritVelocity()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.mode = i2201[1]
  i2200.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.curve)
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemForceOverLifetime()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.x)
  i2202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.y)
  i2202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.z)
  i2202.space = i2203[4]
  i2202.randomized = !!i2203[5]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.limit)
  i2204.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.limitX)
  i2204.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.limitY)
  i2204.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[4], i2204.limitZ)
  i2204.dampen = i2205[5]
  i2204.separateAxes = !!i2205[6]
  i2204.space = i2205[7]
  i2204.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[8], i2204.drag)
  i2204.multiplyDragByParticleSize = !!i2205[9]
  i2204.multiplyDragByParticleVelocity = !!i2205[10]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2207 = data
  i2206.enabled = !!i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'sharedMaterial')
  var i2209 = i2207[3]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2206.sharedMaterials = i2208
  i2206.receiveShadows = !!i2207[4]
  i2206.shadowCastingMode = i2207[5]
  i2206.sortingLayerID = i2207[6]
  i2206.sortingOrder = i2207[7]
  i2206.lightmapIndex = i2207[8]
  i2206.lightmapSceneIndex = i2207[9]
  i2206.lightmapScaleOffset = new pc.Vec4( i2207[10], i2207[11], i2207[12], i2207[13] )
  i2206.lightProbeUsage = i2207[14]
  i2206.reflectionProbeUsage = i2207[15]
  request.r(i2207[16], i2207[17], 0, i2206, 'mesh')
  i2206.meshCount = i2207[18]
  i2206.activeVertexStreamsCount = i2207[19]
  i2206.alignment = i2207[20]
  i2206.renderMode = i2207[21]
  i2206.sortMode = i2207[22]
  i2206.lengthScale = i2207[23]
  i2206.velocityScale = i2207[24]
  i2206.cameraVelocityScale = i2207[25]
  i2206.normalDirection = i2207[26]
  i2206.sortingFudge = i2207[27]
  i2206.minParticleSize = i2207[28]
  i2206.maxParticleSize = i2207[29]
  i2206.pivot = new pc.Vec3( i2207[30], i2207[31], i2207[32] )
  request.r(i2207[33], i2207[34], 0, i2206, 'trailMaterial')
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2211 = data
  i2210.cullTransparentMesh = !!i2211[0]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2213 = data
  i2212.enabled = !!i2213[0]
  request.r(i2213[1], i2213[2], 0, i2212, 'sharedMaterial')
  var i2215 = i2213[3]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 2, i2214, '')
  }
  i2212.sharedMaterials = i2214
  i2212.receiveShadows = !!i2213[4]
  i2212.shadowCastingMode = i2213[5]
  i2212.sortingLayerID = i2213[6]
  i2212.sortingOrder = i2213[7]
  i2212.lightmapIndex = i2213[8]
  i2212.lightmapSceneIndex = i2213[9]
  i2212.lightmapScaleOffset = new pc.Vec4( i2213[10], i2213[11], i2213[12], i2213[13] )
  i2212.lightProbeUsage = i2213[14]
  i2212.reflectionProbeUsage = i2213[15]
  i2212.color = new pc.Color(i2213[16], i2213[17], i2213[18], i2213[19])
  request.r(i2213[20], i2213[21], 0, i2212, 'sprite')
  i2212.flipX = !!i2213[22]
  i2212.flipY = !!i2213[23]
  i2212.drawMode = i2213[24]
  i2212.size = new pc.Vec2( i2213[25], i2213[26] )
  i2212.tileMode = i2213[27]
  i2212.adaptiveModeThreshold = i2213[28]
  i2212.maskInteraction = i2213[29]
  i2212.spriteSortPoint = i2213[30]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2217 = data
  i2216.m_Alpha = i2217[0]
  i2216.m_Interactable = !!i2217[1]
  i2216.m_BlocksRaycasts = !!i2217[2]
  i2216.m_IgnoreParentGroups = !!i2217[3]
  i2216.enabled = !!i2217[4]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.atlasId = i2219[1]
  i2218.mipmapCount = i2219[2]
  i2218.hdr = !!i2219[3]
  i2218.size = i2219[4]
  i2218.anisoLevel = i2219[5]
  i2218.filterMode = i2219[6]
  var i2221 = i2219[7]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 4) {
    i2220.push( UnityEngine.Rect.MinMaxRect(i2221[i + 0], i2221[i + 1], i2221[i + 2], i2221[i + 3]) );
  }
  i2218.rects = i2220
  i2218.wrapU = i2219[8]
  i2218.wrapV = i2219[9]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.index = i2225[1]
  i2224.startup = !!i2225[2]
  return i2224
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2226 = root || request.c( 'GameManager' )
  var i2227 = data
  i2226.idleTimeThreshold = i2227[0]
  i2226.dragCountForEndCard = i2227[1]
  i2226.dragCountForStoreOpen = i2227[2]
  return i2226
}

Deserializers["GridManager"] = function (request, data, root) {
  var i2228 = root || request.c( 'GridManager' )
  var i2229 = data
  i2228.verticalOffset = i2229[0]
  i2228.seed = i2229[1]
  request.r(i2229[2], i2229[3], 0, i2228, 'prefabsParent')
  request.r(i2229[4], i2229[5], 0, i2228, 'rowParentPrefab')
  request.r(i2229[6], i2229[7], 0, i2228, 'slotPrefab')
  request.r(i2229[8], i2229[9], 0, i2228, 'stuffPrefab')
  i2228.slotScale = i2229[10]
  i2228.stuffScale = i2229[11]
  i2228.slotWidth = i2229[12]
  i2228.slotHeight = i2229[13]
  var i2231 = i2229[14]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('RowData', i2231[i + 0]) );
  }
  i2228.levelData = i2230
  i2228.rowMoveDownDuration = i2229[15]
  return i2228
}

Deserializers["RowData"] = function (request, data, root) {
  var i2234 = root || request.c( 'RowData' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'material')
  i2234.wrongStuffCount = i2235[2]
  return i2234
}

Deserializers["DragAndDropManager"] = function (request, data, root) {
  var i2236 = root || request.c( 'DragAndDropManager' )
  var i2237 = data
  i2236.dragZOffset = i2237[0]
  i2236.slotLayer = UnityEngine.LayerMask.FromIntegerValue( i2237[1] )
  return i2236
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2238 = root || request.c( 'UIManager' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'textBackGroundObject')
  request.r(i2239[2], i2239[3], 0, i2238, 'idlePromptText')
  i2238.startY = i2239[4]
  i2238.endY = i2239[5]
  i2238.moveDuration = i2239[6]
  request.r(i2239[7], i2239[8], 0, i2238, 'endCardPanel')
  request.r(i2239[9], i2239[10], 0, i2238, 'playNowButton')
  return i2238
}

Deserializers["EffectsManager"] = function (request, data, root) {
  var i2240 = root || request.c( 'EffectsManager' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'rowClearParticlePrefab')
  request.r(i2241[2], i2241[3], 0, i2240, 'goodTextPrefab')
  i2240.poolSize = i2241[4]
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

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2245 = data
  i2244.m_RenderShadows = !!i2245[0]
  i2244.m_RequiresDepthTextureOption = i2245[1]
  i2244.m_RequiresOpaqueTextureOption = i2245[2]
  i2244.m_CameraType = i2245[3]
  var i2247 = i2245[4]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 1, i2246, '')
  }
  i2244.m_Cameras = i2246
  i2244.m_RendererIndex = i2245[5]
  i2244.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2245[6] )
  request.r(i2245[7], i2245[8], 0, i2244, 'm_VolumeTrigger')
  i2244.m_VolumeFrameworkUpdateModeOption = i2245[9]
  i2244.m_RenderPostProcessing = !!i2245[10]
  i2244.m_Antialiasing = i2245[11]
  i2244.m_AntialiasingQuality = i2245[12]
  i2244.m_StopNaN = !!i2245[13]
  i2244.m_Dithering = !!i2245[14]
  i2244.m_ClearDepth = !!i2245[15]
  i2244.m_AllowXRRendering = !!i2245[16]
  i2244.m_AllowHDROutput = !!i2245[17]
  i2244.m_UseScreenCoordOverride = !!i2245[18]
  i2244.m_ScreenSizeOverride = new pc.Vec4( i2245[19], i2245[20], i2245[21], i2245[22] )
  i2244.m_ScreenCoordScaleBias = new pc.Vec4( i2245[23], i2245[24], i2245[25], i2245[26] )
  i2244.m_RequiresDepthTexture = !!i2245[27]
  i2244.m_RequiresColorTexture = !!i2245[28]
  i2244.m_Version = i2245[29]
  i2244.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2245[30], i2244.m_TaaSettings)
  return i2244
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2251 = data
  i2250.m_Quality = i2251[0]
  i2250.m_FrameInfluence = i2251[1]
  i2250.m_JitterScale = i2251[2]
  i2250.m_MipBias = i2251[3]
  i2250.m_VarianceClampScale = i2251[4]
  i2250.m_ContrastAdaptiveSharpening = i2251[5]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.type = i2253[1]
  i2252.color = new pc.Color(i2253[2], i2253[3], i2253[4], i2253[5])
  i2252.cullingMask = i2253[6]
  i2252.intensity = i2253[7]
  i2252.range = i2253[8]
  i2252.spotAngle = i2253[9]
  i2252.shadows = i2253[10]
  i2252.shadowNormalBias = i2253[11]
  i2252.shadowBias = i2253[12]
  i2252.shadowStrength = i2253[13]
  i2252.shadowResolution = i2253[14]
  i2252.lightmapBakeType = i2253[15]
  i2252.renderMode = i2253[16]
  request.r(i2253[17], i2253[18], 0, i2252, 'cookie')
  i2252.cookieSize = i2253[19]
  return i2252
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2255 = data
  i2254.m_Version = i2255[0]
  i2254.m_UsePipelineSettings = !!i2255[1]
  i2254.m_AdditionalLightsShadowResolutionTier = i2255[2]
  i2254.m_LightLayerMask = i2255[3]
  i2254.m_RenderingLayers = i2255[4]
  i2254.m_CustomShadowLayers = !!i2255[5]
  i2254.m_ShadowLayerMask = i2255[6]
  i2254.m_ShadowRenderingLayers = i2255[7]
  i2254.m_LightCookieSize = new pc.Vec2( i2255[8], i2255[9] )
  i2254.m_LightCookieOffset = new pc.Vec2( i2255[10], i2255[11] )
  i2254.m_SoftShadowQuality = i2255[12]
  return i2254
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2257 = data
  i2256.priority = i2257[0]
  i2256.blendDistance = i2257[1]
  i2256.weight = i2257[2]
  request.r(i2257[3], i2257[4], 0, i2256, 'sharedProfile')
  i2256.m_IsGlobal = !!i2257[5]
  return i2256
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'm_FirstSelected')
  i2258.m_sendNavigationEvents = !!i2259[2]
  i2258.m_DragThreshold = i2259[3]
  return i2258
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2261 = data
  i2260.m_HorizontalAxis = i2261[0]
  i2260.m_VerticalAxis = i2261[1]
  i2260.m_SubmitButton = i2261[2]
  i2260.m_CancelButton = i2261[3]
  i2260.m_InputActionsPerSecond = i2261[4]
  i2260.m_RepeatDelay = i2261[5]
  i2260.m_ForceModuleActive = !!i2261[6]
  i2260.m_SendPointerHoverToParent = !!i2261[7]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.planeDistance = i2263[1]
  i2262.referencePixelsPerUnit = i2263[2]
  i2262.isFallbackOverlay = !!i2263[3]
  i2262.renderMode = i2263[4]
  i2262.renderOrder = i2263[5]
  i2262.sortingLayerName = i2263[6]
  i2262.sortingOrder = i2263[7]
  i2262.scaleFactor = i2263[8]
  request.r(i2263[9], i2263[10], 0, i2262, 'worldCamera')
  i2262.overrideSorting = !!i2263[11]
  i2262.pixelPerfect = !!i2263[12]
  i2262.targetDisplay = i2263[13]
  i2262.overridePixelPerfect = !!i2263[14]
  return i2262
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2265 = data
  i2264.m_UiScaleMode = i2265[0]
  i2264.m_ReferencePixelsPerUnit = i2265[1]
  i2264.m_ScaleFactor = i2265[2]
  i2264.m_ReferenceResolution = new pc.Vec2( i2265[3], i2265[4] )
  i2264.m_ScreenMatchMode = i2265[5]
  i2264.m_MatchWidthOrHeight = i2265[6]
  i2264.m_PhysicalUnit = i2265[7]
  i2264.m_FallbackScreenDPI = i2265[8]
  i2264.m_DefaultSpriteDPI = i2265[9]
  i2264.m_DynamicPixelsPerUnit = i2265[10]
  i2264.m_PresetInfoIsWorld = !!i2265[11]
  return i2264
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2267 = data
  i2266.m_IgnoreReversedGraphics = !!i2267[0]
  i2266.m_BlockingObjects = i2267[1]
  i2266.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2267[2] )
  return i2266
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_Texture')
  i2268.m_UVRect = UnityEngine.Rect.MinMaxRect(i2269[2], i2269[3], i2269[4], i2269[5])
  request.r(i2269[6], i2269[7], 0, i2268, 'm_Material')
  i2268.m_Maskable = !!i2269[8]
  i2268.m_Color = new pc.Color(i2269[9], i2269[10], i2269[11], i2269[12])
  i2268.m_RaycastTarget = !!i2269[13]
  i2268.m_RaycastPadding = new pc.Vec4( i2269[14], i2269[15], i2269[16], i2269[17] )
  return i2268
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2270 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2271 = data
  i2270.m_hasFontAssetChanged = !!i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'm_baseMaterial')
  i2270.m_maskOffset = new pc.Vec4( i2271[3], i2271[4], i2271[5], i2271[6] )
  i2270.m_text = i2271[7]
  i2270.m_isRightToLeft = !!i2271[8]
  request.r(i2271[9], i2271[10], 0, i2270, 'm_fontAsset')
  request.r(i2271[11], i2271[12], 0, i2270, 'm_sharedMaterial')
  var i2273 = i2271[13]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.m_fontSharedMaterials = i2272
  request.r(i2271[14], i2271[15], 0, i2270, 'm_fontMaterial')
  var i2275 = i2271[16]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2270.m_fontMaterials = i2274
  i2270.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2271[17], i2271[18], i2271[19], i2271[20])
  i2270.m_fontColor = new pc.Color(i2271[21], i2271[22], i2271[23], i2271[24])
  i2270.m_enableVertexGradient = !!i2271[25]
  i2270.m_colorMode = i2271[26]
  i2270.m_fontColorGradient = request.d('TMPro.VertexGradient', i2271[27], i2270.m_fontColorGradient)
  request.r(i2271[28], i2271[29], 0, i2270, 'm_fontColorGradientPreset')
  request.r(i2271[30], i2271[31], 0, i2270, 'm_spriteAsset')
  i2270.m_tintAllSprites = !!i2271[32]
  request.r(i2271[33], i2271[34], 0, i2270, 'm_StyleSheet')
  i2270.m_TextStyleHashCode = i2271[35]
  i2270.m_overrideHtmlColors = !!i2271[36]
  i2270.m_faceColor = UnityEngine.Color32.ConstructColor(i2271[37], i2271[38], i2271[39], i2271[40])
  i2270.m_fontSize = i2271[41]
  i2270.m_fontSizeBase = i2271[42]
  i2270.m_fontWeight = i2271[43]
  i2270.m_enableAutoSizing = !!i2271[44]
  i2270.m_fontSizeMin = i2271[45]
  i2270.m_fontSizeMax = i2271[46]
  i2270.m_fontStyle = i2271[47]
  i2270.m_HorizontalAlignment = i2271[48]
  i2270.m_VerticalAlignment = i2271[49]
  i2270.m_textAlignment = i2271[50]
  i2270.m_characterSpacing = i2271[51]
  i2270.m_wordSpacing = i2271[52]
  i2270.m_lineSpacing = i2271[53]
  i2270.m_lineSpacingMax = i2271[54]
  i2270.m_paragraphSpacing = i2271[55]
  i2270.m_charWidthMaxAdj = i2271[56]
  i2270.m_enableWordWrapping = !!i2271[57]
  i2270.m_wordWrappingRatios = i2271[58]
  i2270.m_overflowMode = i2271[59]
  request.r(i2271[60], i2271[61], 0, i2270, 'm_linkedTextComponent')
  request.r(i2271[62], i2271[63], 0, i2270, 'parentLinkedComponent')
  i2270.m_enableKerning = !!i2271[64]
  i2270.m_enableExtraPadding = !!i2271[65]
  i2270.checkPaddingRequired = !!i2271[66]
  i2270.m_isRichText = !!i2271[67]
  i2270.m_parseCtrlCharacters = !!i2271[68]
  i2270.m_isOrthographic = !!i2271[69]
  i2270.m_isCullingEnabled = !!i2271[70]
  i2270.m_horizontalMapping = i2271[71]
  i2270.m_verticalMapping = i2271[72]
  i2270.m_uvLineOffset = i2271[73]
  i2270.m_geometrySortingOrder = i2271[74]
  i2270.m_IsTextObjectScaleStatic = !!i2271[75]
  i2270.m_VertexBufferAutoSizeReduction = !!i2271[76]
  i2270.m_useMaxVisibleDescender = !!i2271[77]
  i2270.m_pageToDisplay = i2271[78]
  i2270.m_margin = new pc.Vec4( i2271[79], i2271[80], i2271[81], i2271[82] )
  i2270.m_isUsingLegacyAnimationComponent = !!i2271[83]
  i2270.m_isVolumetricText = !!i2271[84]
  request.r(i2271[85], i2271[86], 0, i2270, 'm_Material')
  i2270.m_Maskable = !!i2271[87]
  i2270.m_Color = new pc.Color(i2271[88], i2271[89], i2271[90], i2271[91])
  i2270.m_RaycastTarget = !!i2271[92]
  i2270.m_RaycastPadding = new pc.Vec4( i2271[93], i2271[94], i2271[95], i2271[96] )
  return i2270
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.VertexGradient' )
  var i2277 = data
  i2276.topLeft = new pc.Color(i2277[0], i2277[1], i2277[2], i2277[3])
  i2276.topRight = new pc.Color(i2277[4], i2277[5], i2277[6], i2277[7])
  i2276.bottomLeft = new pc.Color(i2277[8], i2277[9], i2277[10], i2277[11])
  i2276.bottomRight = new pc.Color(i2277[12], i2277[13], i2277[14], i2277[15])
  return i2276
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.Image' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'm_Sprite')
  i2278.m_Type = i2279[2]
  i2278.m_PreserveAspect = !!i2279[3]
  i2278.m_FillCenter = !!i2279[4]
  i2278.m_FillMethod = i2279[5]
  i2278.m_FillAmount = i2279[6]
  i2278.m_FillClockwise = !!i2279[7]
  i2278.m_FillOrigin = i2279[8]
  i2278.m_UseSpriteMesh = !!i2279[9]
  i2278.m_PixelsPerUnitMultiplier = i2279[10]
  request.r(i2279[11], i2279[12], 0, i2278, 'm_Material')
  i2278.m_Maskable = !!i2279[13]
  i2278.m_Color = new pc.Color(i2279[14], i2279[15], i2279[16], i2279[17])
  i2278.m_RaycastTarget = !!i2279[18]
  i2278.m_RaycastPadding = new pc.Vec4( i2279[19], i2279[20], i2279[21], i2279[22] )
  return i2278
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.Button' )
  var i2281 = data
  i2280.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2281[0], i2280.m_OnClick)
  i2280.m_Navigation = request.d('UnityEngine.UI.Navigation', i2281[1], i2280.m_Navigation)
  i2280.m_Transition = i2281[2]
  i2280.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2281[3], i2280.m_Colors)
  i2280.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2281[4], i2280.m_SpriteState)
  i2280.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2281[5], i2280.m_AnimationTriggers)
  i2280.m_Interactable = !!i2281[6]
  request.r(i2281[7], i2281[8], 0, i2280, 'm_TargetGraphic')
  return i2280
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2283 = data
  i2282.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2283[0], i2282.m_PersistentCalls)
  return i2282
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2285 = data
  var i2287 = i2285[0]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.add(request.d('UnityEngine.Events.PersistentCall', i2287[i + 0]));
  }
  i2284.m_Calls = i2286
  return i2284
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_Target')
  i2290.m_TargetAssemblyTypeName = i2291[2]
  i2290.m_MethodName = i2291[3]
  i2290.m_Mode = i2291[4]
  i2290.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2291[5], i2290.m_Arguments)
  i2290.m_CallState = i2291[6]
  return i2290
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_ObjectArgument')
  i2292.m_ObjectArgumentAssemblyTypeName = i2293[2]
  i2292.m_IntArgument = i2293[3]
  i2292.m_FloatArgument = i2293[4]
  i2292.m_StringArgument = i2293[5]
  i2292.m_BoolArgument = !!i2293[6]
  return i2292
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2295 = data
  i2294.m_Mode = i2295[0]
  i2294.m_WrapAround = !!i2295[1]
  request.r(i2295[2], i2295[3], 0, i2294, 'm_SelectOnUp')
  request.r(i2295[4], i2295[5], 0, i2294, 'm_SelectOnDown')
  request.r(i2295[6], i2295[7], 0, i2294, 'm_SelectOnLeft')
  request.r(i2295[8], i2295[9], 0, i2294, 'm_SelectOnRight')
  return i2294
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2297 = data
  i2296.m_NormalColor = new pc.Color(i2297[0], i2297[1], i2297[2], i2297[3])
  i2296.m_HighlightedColor = new pc.Color(i2297[4], i2297[5], i2297[6], i2297[7])
  i2296.m_PressedColor = new pc.Color(i2297[8], i2297[9], i2297[10], i2297[11])
  i2296.m_SelectedColor = new pc.Color(i2297[12], i2297[13], i2297[14], i2297[15])
  i2296.m_DisabledColor = new pc.Color(i2297[16], i2297[17], i2297[18], i2297[19])
  i2296.m_ColorMultiplier = i2297[20]
  i2296.m_FadeDuration = i2297[21]
  return i2296
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'm_HighlightedSprite')
  request.r(i2299[2], i2299[3], 0, i2298, 'm_PressedSprite')
  request.r(i2299[4], i2299[5], 0, i2298, 'm_SelectedSprite')
  request.r(i2299[6], i2299[7], 0, i2298, 'm_DisabledSprite')
  return i2298
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2301 = data
  i2300.m_NormalTrigger = i2301[0]
  i2300.m_HighlightedTrigger = i2301[1]
  i2300.m_PressedTrigger = i2301[2]
  i2300.m_SelectedTrigger = i2301[3]
  i2300.m_DisabledTrigger = i2301[4]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2303 = data
  i2302.ambientIntensity = i2303[0]
  i2302.reflectionIntensity = i2303[1]
  i2302.ambientMode = i2303[2]
  i2302.ambientLight = new pc.Color(i2303[3], i2303[4], i2303[5], i2303[6])
  i2302.ambientSkyColor = new pc.Color(i2303[7], i2303[8], i2303[9], i2303[10])
  i2302.ambientGroundColor = new pc.Color(i2303[11], i2303[12], i2303[13], i2303[14])
  i2302.ambientEquatorColor = new pc.Color(i2303[15], i2303[16], i2303[17], i2303[18])
  i2302.fogColor = new pc.Color(i2303[19], i2303[20], i2303[21], i2303[22])
  i2302.fogEndDistance = i2303[23]
  i2302.fogStartDistance = i2303[24]
  i2302.fogDensity = i2303[25]
  i2302.fog = !!i2303[26]
  request.r(i2303[27], i2303[28], 0, i2302, 'skybox')
  i2302.fogMode = i2303[29]
  var i2305 = i2303[30]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2305[i + 0]) );
  }
  i2302.lightmaps = i2304
  i2302.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2303[31], i2302.lightProbes)
  i2302.lightmapsMode = i2303[32]
  i2302.mixedBakeMode = i2303[33]
  i2302.environmentLightingMode = i2303[34]
  i2302.ambientProbe = new pc.SphericalHarmonicsL2(i2303[35])
  i2302.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2303[36])
  i2302.useReferenceAmbientProbe = !!i2303[37]
  request.r(i2303[38], i2303[39], 0, i2302, 'customReflection')
  request.r(i2303[40], i2303[41], 0, i2302, 'defaultReflection')
  i2302.defaultReflectionMode = i2303[42]
  i2302.defaultReflectionResolution = i2303[43]
  i2302.sunLightObjectId = i2303[44]
  i2302.pixelLightCount = i2303[45]
  i2302.defaultReflectionHDR = !!i2303[46]
  i2302.hasLightDataAsset = !!i2303[47]
  i2302.hasManualGenerate = !!i2303[48]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'lightmapColor')
  request.r(i2309[2], i2309[3], 0, i2308, 'lightmapDirection')
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2310 = root || new UnityEngine.LightProbes()
  var i2311 = data
  return i2310
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'panelPrefab')
  var i2321 = i2319[2]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2321[i + 0]));
  }
  i2318.prefabs = i2320
  return i2318
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2325 = data
  i2324.type = i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'prefab')
  return i2324
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2327 = data
  i2326.m_Spacing = i2327[0]
  i2326.m_ChildForceExpandWidth = !!i2327[1]
  i2326.m_ChildForceExpandHeight = !!i2327[2]
  i2326.m_ChildControlWidth = !!i2327[3]
  i2326.m_ChildControlHeight = !!i2327[4]
  i2326.m_ChildScaleWidth = !!i2327[5]
  i2326.m_ChildScaleHeight = !!i2327[6]
  i2326.m_ReverseArrangement = !!i2327[7]
  i2326.m_Padding = UnityEngine.RectOffset.FromPaddings(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.m_ChildAlignment = i2327[12]
  return i2326
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2329 = data
  i2328.m_HorizontalFit = i2329[0]
  i2328.m_VerticalFit = i2329[1]
  return i2328
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'contentHolder')
  return i2330
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'nameLabel')
  request.r(i2333[2], i2333[3], 0, i2332, 'scrollRect')
  request.r(i2333[4], i2333[5], 0, i2332, 'viewport')
  request.r(i2333[6], i2333[7], 0, i2332, 'Canvas')
  return i2332
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2335 = data
  i2334.m_IgnoreLayout = !!i2335[0]
  i2334.m_MinWidth = i2335[1]
  i2334.m_MinHeight = i2335[2]
  i2334.m_PreferredWidth = i2335[3]
  i2334.m_PreferredHeight = i2335[4]
  i2334.m_FlexibleWidth = i2335[5]
  i2334.m_FlexibleHeight = i2335[6]
  i2334.m_LayoutPriority = i2335[7]
  return i2334
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.Text' )
  var i2337 = data
  i2336.m_FontData = request.d('UnityEngine.UI.FontData', i2337[0], i2336.m_FontData)
  i2336.m_Text = i2337[1]
  request.r(i2337[2], i2337[3], 0, i2336, 'm_Material')
  i2336.m_Maskable = !!i2337[4]
  i2336.m_Color = new pc.Color(i2337[5], i2337[6], i2337[7], i2337[8])
  i2336.m_RaycastTarget = !!i2337[9]
  i2336.m_RaycastPadding = new pc.Vec4( i2337[10], i2337[11], i2337[12], i2337[13] )
  return i2336
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'm_Font')
  i2338.m_FontSize = i2339[2]
  i2338.m_FontStyle = i2339[3]
  i2338.m_BestFit = !!i2339[4]
  i2338.m_MinSize = i2339[5]
  i2338.m_MaxSize = i2339[6]
  i2338.m_Alignment = i2339[7]
  i2338.m_AlignByGeometry = !!i2339[8]
  i2338.m_RichText = !!i2339[9]
  i2338.m_HorizontalOverflow = i2339[10]
  i2338.m_VerticalOverflow = i2339[11]
  i2338.m_LineSpacing = i2339[12]
  return i2338
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'm_Content')
  i2340.m_Horizontal = !!i2341[2]
  i2340.m_Vertical = !!i2341[3]
  i2340.m_MovementType = i2341[4]
  i2340.m_Elasticity = i2341[5]
  i2340.m_Inertia = !!i2341[6]
  i2340.m_DecelerationRate = i2341[7]
  i2340.m_ScrollSensitivity = i2341[8]
  request.r(i2341[9], i2341[10], 0, i2340, 'm_Viewport')
  request.r(i2341[11], i2341[12], 0, i2340, 'm_HorizontalScrollbar')
  request.r(i2341[13], i2341[14], 0, i2340, 'm_VerticalScrollbar')
  i2340.m_HorizontalScrollbarVisibility = i2341[15]
  i2340.m_VerticalScrollbarVisibility = i2341[16]
  i2340.m_HorizontalScrollbarSpacing = i2341[17]
  i2340.m_VerticalScrollbarSpacing = i2341[18]
  i2340.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2341[19], i2340.m_OnValueChanged)
  return i2340
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2343 = data
  i2342.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2343[0], i2342.m_PersistentCalls)
  return i2342
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2345 = data
  i2344.m_ShowMaskGraphic = !!i2345[0]
  return i2344
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'm_HandleRect')
  i2346.m_Direction = i2347[2]
  i2346.m_Value = i2347[3]
  i2346.m_Size = i2347[4]
  i2346.m_NumberOfSteps = i2347[5]
  i2346.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2347[6], i2346.m_OnValueChanged)
  i2346.m_Navigation = request.d('UnityEngine.UI.Navigation', i2347[7], i2346.m_Navigation)
  i2346.m_Transition = i2347[8]
  i2346.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2347[9], i2346.m_Colors)
  i2346.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2347[10], i2346.m_SpriteState)
  i2346.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2347[11], i2346.m_AnimationTriggers)
  i2346.m_Interactable = !!i2347[12]
  request.r(i2347[13], i2347[14], 0, i2346, 'm_TargetGraphic')
  return i2346
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2349 = data
  i2348.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2349[0], i2348.m_PersistentCalls)
  return i2348
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2351 = data
  var i2353 = i2351[0]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2353[i + 0]));
  }
  i2350.m_Delegates = i2352
  return i2350
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2357 = data
  i2356.eventID = i2357[0]
  i2356.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2357[1], i2356.callback)
  return i2356
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2359 = data
  i2358.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2359[0], i2358.m_PersistentCalls)
  return i2358
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'nameLabel')
  request.r(i2361[2], i2361[3], 0, i2360, 'valueLabel')
  i2360.colorDefault = new pc.Color(i2361[4], i2361[5], i2361[6], i2361[7])
  i2360.colorSelected = new pc.Color(i2361[8], i2361[9], i2361[10], i2361[11])
  return i2360
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'nameLabel')
  request.r(i2363[2], i2363[3], 0, i2362, 'valueToggle')
  request.r(i2363[4], i2363[5], 0, i2362, 'checkmarkImage')
  i2362.colorDefault = new pc.Color(i2363[6], i2363[7], i2363[8], i2363[9])
  i2362.colorSelected = new pc.Color(i2363[10], i2363[11], i2363[12], i2363[13])
  return i2362
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2365 = data
  i2364.toggleTransition = i2365[0]
  request.r(i2365[1], i2365[2], 0, i2364, 'graphic')
  i2364.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2365[3], i2364.onValueChanged)
  request.r(i2365[4], i2365[5], 0, i2364, 'm_Group')
  i2364.m_IsOn = !!i2365[6]
  i2364.m_Navigation = request.d('UnityEngine.UI.Navigation', i2365[7], i2364.m_Navigation)
  i2364.m_Transition = i2365[8]
  i2364.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2365[9], i2364.m_Colors)
  i2364.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2365[10], i2364.m_SpriteState)
  i2364.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2365[11], i2364.m_AnimationTriggers)
  i2364.m_Interactable = !!i2365[12]
  request.r(i2365[13], i2365[14], 0, i2364, 'm_TargetGraphic')
  return i2364
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2367 = data
  i2366.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2367[0], i2366.m_PersistentCalls)
  return i2366
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'nameLabel')
  request.r(i2369[2], i2369[3], 0, i2368, 'valueLabel')
  i2368.colorDefault = new pc.Color(i2369[4], i2369[5], i2369[6], i2369[7])
  i2368.colorSelected = new pc.Color(i2369[8], i2369[9], i2369[10], i2369[11])
  return i2368
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'nameLabel')
  request.r(i2371[2], i2371[3], 0, i2370, 'valueLabel')
  i2370.colorDefault = new pc.Color(i2371[4], i2371[5], i2371[6], i2371[7])
  i2370.colorSelected = new pc.Color(i2371[8], i2371[9], i2371[10], i2371[11])
  return i2370
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'nameLabel')
  request.r(i2373[2], i2373[3], 0, i2372, 'valueLabel')
  i2372.colorDefault = new pc.Color(i2373[4], i2373[5], i2373[6], i2373[7])
  i2372.colorSelected = new pc.Color(i2373[8], i2373[9], i2373[10], i2373[11])
  return i2372
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'nextButtonText')
  request.r(i2375[2], i2375[3], 0, i2374, 'previousButtonText')
  request.r(i2375[4], i2375[5], 0, i2374, 'nameLabel')
  request.r(i2375[6], i2375[7], 0, i2374, 'valueLabel')
  i2374.colorDefault = new pc.Color(i2375[8], i2375[9], i2375[10], i2375[11])
  i2374.colorSelected = new pc.Color(i2375[12], i2375[13], i2375[14], i2375[15])
  return i2374
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'nameLabel')
  i2376.colorDefault = new pc.Color(i2377[2], i2377[3], i2377[4], i2377[5])
  i2376.colorSelected = new pc.Color(i2377[6], i2377[7], i2377[8], i2377[9])
  return i2376
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'nameLabel')
  request.r(i2379[2], i2379[3], 0, i2378, 'valueToggle')
  i2378.colorDefault = new pc.Color(i2379[4], i2379[5], i2379[6], i2379[7])
  i2378.colorSelected = new pc.Color(i2379[8], i2379[9], i2379[10], i2379[11])
  return i2378
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2381 = data
  i2380.toggleTransition = i2381[0]
  request.r(i2381[1], i2381[2], 0, i2380, 'graphic')
  i2380.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2381[3], i2380.onValueChanged)
  request.r(i2381[4], i2381[5], 0, i2380, 'content')
  request.r(i2381[6], i2381[7], 0, i2380, 'arrowOpened')
  request.r(i2381[8], i2381[9], 0, i2380, 'arrowClosed')
  request.r(i2381[10], i2381[11], 0, i2380, 'm_Group')
  i2380.m_IsOn = !!i2381[12]
  i2380.m_Navigation = request.d('UnityEngine.UI.Navigation', i2381[13], i2380.m_Navigation)
  i2380.m_Transition = i2381[14]
  i2380.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2381[15], i2380.m_Colors)
  i2380.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2381[16], i2380.m_SpriteState)
  i2380.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2381[17], i2380.m_AnimationTriggers)
  i2380.m_Interactable = !!i2381[18]
  request.r(i2381[19], i2381[20], 0, i2380, 'm_TargetGraphic')
  return i2380
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'nameLabel')
  request.r(i2383[2], i2383[3], 0, i2382, 'valueToggle')
  request.r(i2383[4], i2383[5], 0, i2382, 'colorImage')
  request.r(i2383[6], i2383[7], 0, i2382, 'fieldR')
  request.r(i2383[8], i2383[9], 0, i2382, 'fieldG')
  request.r(i2383[10], i2383[11], 0, i2382, 'fieldB')
  request.r(i2383[12], i2383[13], 0, i2382, 'fieldA')
  i2382.colorDefault = new pc.Color(i2383[14], i2383[15], i2383[16], i2383[17])
  i2382.colorSelected = new pc.Color(i2383[18], i2383[19], i2383[20], i2383[21])
  return i2382
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'nameLabel')
  request.r(i2385[2], i2385[3], 0, i2384, 'valueLabel')
  i2384.colorDefault = new pc.Color(i2385[4], i2385[5], i2385[6], i2385[7])
  i2384.colorSelected = new pc.Color(i2385[8], i2385[9], i2385[10], i2385[11])
  return i2384
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'nameLabel')
  request.r(i2387[2], i2387[3], 0, i2386, 'valueToggle')
  request.r(i2387[4], i2387[5], 0, i2386, 'fieldX')
  request.r(i2387[6], i2387[7], 0, i2386, 'fieldY')
  i2386.colorDefault = new pc.Color(i2387[8], i2387[9], i2387[10], i2387[11])
  i2386.colorSelected = new pc.Color(i2387[12], i2387[13], i2387[14], i2387[15])
  return i2386
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'nameLabel')
  request.r(i2389[2], i2389[3], 0, i2388, 'valueToggle')
  request.r(i2389[4], i2389[5], 0, i2388, 'fieldX')
  request.r(i2389[6], i2389[7], 0, i2388, 'fieldY')
  request.r(i2389[8], i2389[9], 0, i2388, 'fieldZ')
  i2388.colorDefault = new pc.Color(i2389[10], i2389[11], i2389[12], i2389[13])
  i2388.colorSelected = new pc.Color(i2389[14], i2389[15], i2389[16], i2389[17])
  return i2388
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'nameLabel')
  request.r(i2391[2], i2391[3], 0, i2390, 'valueToggle')
  request.r(i2391[4], i2391[5], 0, i2390, 'fieldX')
  request.r(i2391[6], i2391[7], 0, i2390, 'fieldY')
  request.r(i2391[8], i2391[9], 0, i2390, 'fieldZ')
  request.r(i2391[10], i2391[11], 0, i2390, 'fieldW')
  i2390.colorDefault = new pc.Color(i2391[12], i2391[13], i2391[14], i2391[15])
  i2390.colorSelected = new pc.Color(i2391[16], i2391[17], i2391[18], i2391[19])
  return i2390
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2393 = data
  i2392.colorDefault = new pc.Color(i2393[0], i2393[1], i2393[2], i2393[3])
  i2392.colorSelected = new pc.Color(i2393[4], i2393[5], i2393[6], i2393[7])
  return i2392
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2395 = data
  i2394.m_Spacing = i2395[0]
  i2394.m_ChildForceExpandWidth = !!i2395[1]
  i2394.m_ChildForceExpandHeight = !!i2395[2]
  i2394.m_ChildControlWidth = !!i2395[3]
  i2394.m_ChildControlHeight = !!i2395[4]
  i2394.m_ChildScaleWidth = !!i2395[5]
  i2394.m_ChildScaleHeight = !!i2395[6]
  i2394.m_ReverseArrangement = !!i2395[7]
  i2394.m_Padding = UnityEngine.RectOffset.FromPaddings(i2395[8], i2395[9], i2395[10], i2395[11])
  i2394.m_ChildAlignment = i2395[12]
  return i2394
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2397 = data
  i2396.colorDefault = new pc.Color(i2397[0], i2397[1], i2397[2], i2397[3])
  i2396.colorSelected = new pc.Color(i2397[4], i2397[5], i2397[6], i2397[7])
  return i2396
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'nameLabel')
  request.r(i2399[2], i2399[3], 0, i2398, 'header')
  i2398.colorDefault = new pc.Color(i2399[4], i2399[5], i2399[6], i2399[7])
  i2398.colorSelected = new pc.Color(i2399[8], i2399[9], i2399[10], i2399[11])
  return i2398
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'nameLabel')
  request.r(i2401[2], i2401[3], 0, i2400, 'valueToggle')
  var i2403 = i2401[4]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2400.toggles = i2402
  i2400.colorDefault = new pc.Color(i2401[5], i2401[6], i2401[7], i2401[8])
  i2400.colorSelected = new pc.Color(i2401[9], i2401[10], i2401[11], i2401[12])
  return i2400
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'nameLabel')
  request.r(i2407[2], i2407[3], 0, i2406, 'valueToggle')
  request.r(i2407[4], i2407[5], 0, i2406, 'checkmarkImage')
  i2406.colorDefault = new pc.Color(i2407[6], i2407[7], i2407[8], i2407[9])
  i2406.colorSelected = new pc.Color(i2407[10], i2407[11], i2407[12], i2407[13])
  return i2406
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'nameLabel')
  request.r(i2409[2], i2409[3], 0, i2408, 'valueToggle')
  request.r(i2409[4], i2409[5], 0, i2408, 'checkmarkImage')
  i2408.colorDefault = new pc.Color(i2409[6], i2409[7], i2409[8], i2409[9])
  i2408.colorSelected = new pc.Color(i2409[10], i2409[11], i2409[12], i2409[13])
  return i2408
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'nextButtonText')
  request.r(i2411[2], i2411[3], 0, i2410, 'previousButtonText')
  request.r(i2411[4], i2411[5], 0, i2410, 'nameLabel')
  request.r(i2411[6], i2411[7], 0, i2410, 'valueLabel')
  i2410.colorDefault = new pc.Color(i2411[8], i2411[9], i2411[10], i2411[11])
  i2410.colorSelected = new pc.Color(i2411[12], i2411[13], i2411[14], i2411[15])
  return i2410
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'nameLabel')
  request.r(i2413[2], i2413[3], 0, i2412, 'valueToggle')
  i2412.colorDefault = new pc.Color(i2413[4], i2413[5], i2413[6], i2413[7])
  i2412.colorSelected = new pc.Color(i2413[8], i2413[9], i2413[10], i2413[11])
  return i2412
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'nameLabel')
  i2414.colorDefault = new pc.Color(i2415[2], i2415[3], i2415[4], i2415[5])
  i2414.colorSelected = new pc.Color(i2415[6], i2415[7], i2415[8], i2415[9])
  return i2414
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'nameLabel')
  request.r(i2417[2], i2417[3], 0, i2416, 'valueLabel')
  request.r(i2417[4], i2417[5], 0, i2416, 'progressBarRect')
  i2416.colorDefault = new pc.Color(i2417[6], i2417[7], i2417[8], i2417[9])
  i2416.colorSelected = new pc.Color(i2417[10], i2417[11], i2417[12], i2417[13])
  return i2416
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'nameLabel')
  request.r(i2419[2], i2419[3], 0, i2418, 'valueLabel')
  i2418.colorDefault = new pc.Color(i2419[4], i2419[5], i2419[6], i2419[7])
  i2418.colorSelected = new pc.Color(i2419[8], i2419[9], i2419[10], i2419[11])
  return i2418
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'nameLabel')
  request.r(i2421[2], i2421[3], 0, i2420, 'valueLabel')
  i2420.colorDefault = new pc.Color(i2421[4], i2421[5], i2421[6], i2421[7])
  i2420.colorSelected = new pc.Color(i2421[8], i2421[9], i2421[10], i2421[11])
  return i2420
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'nextButtonText')
  request.r(i2423[2], i2423[3], 0, i2422, 'previousButtonText')
  request.r(i2423[4], i2423[5], 0, i2422, 'nameLabel')
  request.r(i2423[6], i2423[7], 0, i2422, 'valueLabel')
  i2422.colorDefault = new pc.Color(i2423[8], i2423[9], i2423[10], i2423[11])
  i2422.colorSelected = new pc.Color(i2423[12], i2423[13], i2423[14], i2423[15])
  return i2422
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'nextButtonText')
  request.r(i2425[2], i2425[3], 0, i2424, 'previousButtonText')
  request.r(i2425[4], i2425[5], 0, i2424, 'nameLabel')
  request.r(i2425[6], i2425[7], 0, i2424, 'valueLabel')
  i2424.colorDefault = new pc.Color(i2425[8], i2425[9], i2425[10], i2425[11])
  i2424.colorSelected = new pc.Color(i2425[12], i2425[13], i2425[14], i2425[15])
  return i2424
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'panel')
  request.r(i2427[2], i2427[3], 0, i2426, 'valuePrefab')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2429 = data
  i2428.AdditionalLightsPerObjectLimit = i2429[0]
  i2428.AdditionalLightsRenderingMode = i2429[1]
  i2428.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2429[2], i2428.LightRenderingMode)
  i2428.ColorGradingLutSize = i2429[3]
  i2428.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2429[4], i2428.ColorGradingMode)
  i2428.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2429[5], i2428.MainLightRenderingMode)
  i2428.MainLightRenderingModeValue = i2429[6]
  i2428.SupportsMainLightShadows = !!i2429[7]
  i2428.MixedLightingSupported = !!i2429[8]
  i2428.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2429[9], i2428.MsaaQuality)
  i2428.MSAA = i2429[10]
  i2428.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2429[11], i2428.OpaqueDownsampling)
  i2428.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2429[12], i2428.MainLightShadowmapResolution)
  i2428.MainLightShadowmapResolutionValue = i2429[13]
  i2428.SupportsSoftShadows = !!i2429[14]
  i2428.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2429[15], i2428.SoftShadowQuality)
  i2428.SoftShadowQualityValue = i2429[16]
  i2428.ShadowDistance = i2429[17]
  i2428.ShadowCascadeCount = i2429[18]
  i2428.Cascade2Split = i2429[19]
  i2428.Cascade3Split = new pc.Vec2( i2429[20], i2429[21] )
  i2428.Cascade4Split = new pc.Vec3( i2429[22], i2429[23], i2429[24] )
  i2428.CascadeBorder = i2429[25]
  i2428.ShadowDepthBias = i2429[26]
  i2428.ShadowNormalBias = i2429[27]
  i2428.RenderScale = i2429[28]
  i2428.RequireDepthTexture = !!i2429[29]
  i2428.RequireOpaqueTexture = !!i2429[30]
  i2428.SupportsHDR = !!i2429[31]
  i2428.SupportsTerrainHoles = !!i2429[32]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2431 = data
  i2430.Disabled = i2431[0]
  i2430.PerVertex = i2431[1]
  i2430.PerPixel = i2431[2]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2433 = data
  i2432.LowDynamicRange = i2433[0]
  i2432.HighDynamicRange = i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2435 = data
  i2434.Disabled = i2435[0]
  i2434._2x = i2435[1]
  i2434._4x = i2435[2]
  i2434._8x = i2435[3]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2437 = data
  i2436.None = i2437[0]
  i2436._2xBilinear = i2437[1]
  i2436._4xBox = i2437[2]
  i2436._4xBilinear = i2437[3]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2439 = data
  i2438._256 = i2439[0]
  i2438._512 = i2439[1]
  i2438._1024 = i2439[2]
  i2438._2048 = i2439[3]
  i2438._4096 = i2439[4]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2441 = data
  i2440.UsePipelineSettings = i2441[0]
  i2440.Low = i2441[1]
  i2440.Medium = i2441[2]
  i2440.High = i2441[3]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2445[i + 0]));
  }
  i2442.ShaderCompilationErrors = i2444
  i2442.name = i2443[1]
  i2442.guid = i2443[2]
  var i2447 = i2443[3]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( i2447[i + 0] );
  }
  i2442.shaderDefinedKeywords = i2446
  var i2449 = i2443[4]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2449[i + 0]) );
  }
  i2442.passes = i2448
  var i2451 = i2443[5]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2451[i + 0]) );
  }
  i2442.usePasses = i2450
  var i2453 = i2443[6]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2453[i + 0]) );
  }
  i2442.defaultParameterValues = i2452
  request.r(i2443[7], i2443[8], 0, i2442, 'unityFallbackShader')
  i2442.readDepth = !!i2443[9]
  i2442.isCreatedByShaderGraph = !!i2443[10]
  i2442.compiled = !!i2443[11]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2457 = data
  i2456.shaderName = i2457[0]
  i2456.errorMessage = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2462 = root || new pc.UnityShaderPass()
  var i2463 = data
  i2462.id = i2463[0]
  i2462.subShaderIndex = i2463[1]
  i2462.name = i2463[2]
  i2462.passType = i2463[3]
  i2462.grabPassTextureName = i2463[4]
  i2462.usePass = !!i2463[5]
  i2462.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[6], i2462.zTest)
  i2462.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[7], i2462.zWrite)
  i2462.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[8], i2462.culling)
  i2462.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2463[9], i2462.blending)
  i2462.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2463[10], i2462.alphaBlending)
  i2462.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[11], i2462.colorWriteMask)
  i2462.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[12], i2462.offsetUnits)
  i2462.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[13], i2462.offsetFactor)
  i2462.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[14], i2462.stencilRef)
  i2462.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[15], i2462.stencilReadMask)
  i2462.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2463[16], i2462.stencilWriteMask)
  i2462.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[17], i2462.stencilOp)
  i2462.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[18], i2462.stencilOpFront)
  i2462.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2463[19], i2462.stencilOpBack)
  var i2465 = i2463[20]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2465[i + 0]) );
  }
  i2462.tags = i2464
  var i2467 = i2463[21]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( i2467[i + 0] );
  }
  i2462.passDefinedKeywords = i2466
  var i2469 = i2463[22]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2469[i + 0]) );
  }
  i2462.passDefinedKeywordGroups = i2468
  var i2471 = i2463[23]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2471[i + 0]) );
  }
  i2462.variants = i2470
  var i2473 = i2463[24]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2473[i + 0]) );
  }
  i2462.excludedVariants = i2472
  i2462.hasDepthReader = !!i2463[25]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2475 = data
  i2474.val = i2475[0]
  i2474.name = i2475[1]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2477 = data
  i2476.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[0], i2476.src)
  i2476.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[1], i2476.dst)
  i2476.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2477[2], i2476.op)
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2479 = data
  i2478.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[0], i2478.pass)
  i2478.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[1], i2478.fail)
  i2478.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[2], i2478.zFail)
  i2478.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[3], i2478.comp)
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2483 = data
  i2482.name = i2483[0]
  i2482.value = i2483[1]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2487 = data
  var i2489 = i2487[0]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2486.keywords = i2488
  i2486.hasDiscard = !!i2487[1]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2493 = data
  i2492.passId = i2493[0]
  i2492.subShaderIndex = i2493[1]
  var i2495 = i2493[2]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2492.keywords = i2494
  i2492.vertexProgram = i2493[3]
  i2492.fragmentProgram = i2493[4]
  i2492.exportedForWebGl2 = !!i2493[5]
  i2492.readDepth = !!i2493[6]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'shader')
  i2498.pass = i2499[2]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.type = i2503[1]
  i2502.value = new pc.Vec4( i2503[2], i2503[3], i2503[4], i2503[5] )
  i2502.textureValue = i2503[6]
  i2502.shaderPropertyFlag = i2503[7]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2505 = data
  i2504.name = i2505[0]
  request.r(i2505[1], i2505[2], 0, i2504, 'texture')
  i2504.aabb = i2505[3]
  i2504.vertices = i2505[4]
  i2504.triangles = i2505[5]
  i2504.textureRect = UnityEngine.Rect.MinMaxRect(i2505[6], i2505[7], i2505[8], i2505[9])
  i2504.packedRect = UnityEngine.Rect.MinMaxRect(i2505[10], i2505[11], i2505[12], i2505[13])
  i2504.border = new pc.Vec4( i2505[14], i2505[15], i2505[16], i2505[17] )
  i2504.transparency = i2505[18]
  i2504.bounds = i2505[19]
  i2504.pixelsPerUnit = i2505[20]
  i2504.textureWidth = i2505[21]
  i2504.textureHeight = i2505[22]
  i2504.nativeSize = new pc.Vec2( i2505[23], i2505[24] )
  i2504.pivot = new pc.Vec2( i2505[25], i2505[26] )
  i2504.textureRectOffset = new pc.Vec2( i2505[27], i2505[28] )
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2507 = data
  i2506.name = i2507[0]
  i2506.ascent = i2507[1]
  i2506.originalLineHeight = i2507[2]
  i2506.fontSize = i2507[3]
  var i2509 = i2507[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2509[i + 0]) );
  }
  i2506.characterInfo = i2508
  request.r(i2507[5], i2507[6], 0, i2506, 'texture')
  i2506.originalFontSize = i2507[7]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2513 = data
  i2512.index = i2513[0]
  i2512.advance = i2513[1]
  i2512.bearing = i2513[2]
  i2512.glyphWidth = i2513[3]
  i2512.glyphHeight = i2513[4]
  i2512.minX = i2513[5]
  i2512.maxX = i2513[6]
  i2512.minY = i2513[7]
  i2512.maxY = i2513[8]
  i2512.uvBottomLeftX = i2513[9]
  i2512.uvBottomLeftY = i2513[10]
  i2512.uvBottomRightX = i2513[11]
  i2512.uvBottomRightY = i2513[12]
  i2512.uvTopLeftX = i2513[13]
  i2512.uvTopLeftY = i2513[14]
  i2512.uvTopRightX = i2513[15]
  i2512.uvTopRightY = i2513[16]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.bytes64 = i2515[1]
  i2514.data = i2515[2]
  return i2514
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2516 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2517 = data
  i2516.hashCode = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'material')
  i2516.materialHashCode = i2517[3]
  request.r(i2517[4], i2517[5], 0, i2516, 'atlas')
  i2516.normalStyle = i2517[6]
  i2516.normalSpacingOffset = i2517[7]
  i2516.boldStyle = i2517[8]
  i2516.boldSpacing = i2517[9]
  i2516.italicStyle = i2517[10]
  i2516.tabSize = i2517[11]
  i2516.m_Version = i2517[12]
  i2516.m_SourceFontFileGUID = i2517[13]
  request.r(i2517[14], i2517[15], 0, i2516, 'm_SourceFontFile_EditorRef')
  request.r(i2517[16], i2517[17], 0, i2516, 'm_SourceFontFile')
  i2516.m_AtlasPopulationMode = i2517[18]
  i2516.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2517[19], i2516.m_FaceInfo)
  var i2519 = i2517[20]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.add(request.d('UnityEngine.TextCore.Glyph', i2519[i + 0]));
  }
  i2516.m_GlyphTable = i2518
  var i2521 = i2517[21]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('TMPro.TMP_Character', i2521[i + 0]));
  }
  i2516.m_CharacterTable = i2520
  var i2523 = i2517[22]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2516.m_AtlasTextures = i2522
  i2516.m_AtlasTextureIndex = i2517[23]
  i2516.m_IsMultiAtlasTexturesEnabled = !!i2517[24]
  i2516.m_ClearDynamicDataOnBuild = !!i2517[25]
  var i2525 = i2517[26]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('UnityEngine.TextCore.GlyphRect', i2525[i + 0]));
  }
  i2516.m_UsedGlyphRects = i2524
  var i2527 = i2517[27]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(request.d('UnityEngine.TextCore.GlyphRect', i2527[i + 0]));
  }
  i2516.m_FreeGlyphRects = i2526
  i2516.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2517[28], i2516.m_fontInfo)
  i2516.m_AtlasWidth = i2517[29]
  i2516.m_AtlasHeight = i2517[30]
  i2516.m_AtlasPadding = i2517[31]
  i2516.m_AtlasRenderMode = i2517[32]
  var i2529 = i2517[33]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(request.d('TMPro.TMP_Glyph', i2529[i + 0]));
  }
  i2516.m_glyphInfoList = i2528
  i2516.m_KerningTable = request.d('TMPro.KerningTable', i2517[34], i2516.m_KerningTable)
  i2516.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2517[35], i2516.m_FontFeatureTable)
  var i2531 = i2517[36]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 1, i2530, '')
  }
  i2516.fallbackFontAssets = i2530
  var i2533 = i2517[37]
  var i2532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 1, i2532, '')
  }
  i2516.m_FallbackFontAssetTable = i2532
  i2516.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2517[38], i2516.m_CreationSettings)
  var i2535 = i2517[39]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('TMPro.TMP_FontWeightPair', i2535[i + 0]) );
  }
  i2516.m_FontWeightTable = i2534
  var i2537 = i2517[40]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('TMPro.TMP_FontWeightPair', i2537[i + 0]) );
  }
  i2516.fontWeights = i2536
  return i2516
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2539 = data
  i2538.m_FaceIndex = i2539[0]
  i2538.m_FamilyName = i2539[1]
  i2538.m_StyleName = i2539[2]
  i2538.m_PointSize = i2539[3]
  i2538.m_Scale = i2539[4]
  i2538.m_UnitsPerEM = i2539[5]
  i2538.m_LineHeight = i2539[6]
  i2538.m_AscentLine = i2539[7]
  i2538.m_CapLine = i2539[8]
  i2538.m_MeanLine = i2539[9]
  i2538.m_Baseline = i2539[10]
  i2538.m_DescentLine = i2539[11]
  i2538.m_SuperscriptOffset = i2539[12]
  i2538.m_SuperscriptSize = i2539[13]
  i2538.m_SubscriptOffset = i2539[14]
  i2538.m_SubscriptSize = i2539[15]
  i2538.m_UnderlineOffset = i2539[16]
  i2538.m_UnderlineThickness = i2539[17]
  i2538.m_StrikethroughOffset = i2539[18]
  i2538.m_StrikethroughThickness = i2539[19]
  i2538.m_TabWidth = i2539[20]
  return i2538
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2543 = data
  i2542.m_Index = i2543[0]
  i2542.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2543[1], i2542.m_Metrics)
  i2542.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2543[2], i2542.m_GlyphRect)
  i2542.m_Scale = i2543[3]
  i2542.m_AtlasIndex = i2543[4]
  i2542.m_ClassDefinitionType = i2543[5]
  return i2542
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2544 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2545 = data
  i2544.m_Width = i2545[0]
  i2544.m_Height = i2545[1]
  i2544.m_HorizontalBearingX = i2545[2]
  i2544.m_HorizontalBearingY = i2545[3]
  i2544.m_HorizontalAdvance = i2545[4]
  return i2544
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2547 = data
  i2546.m_X = i2547[0]
  i2546.m_Y = i2547[1]
  i2546.m_Width = i2547[2]
  i2546.m_Height = i2547[3]
  return i2546
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.TMP_Character' )
  var i2551 = data
  i2550.m_ElementType = i2551[0]
  i2550.m_Unicode = i2551[1]
  i2550.m_GlyphIndex = i2551[2]
  i2550.m_Scale = i2551[3]
  return i2550
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2557 = data
  i2556.Name = i2557[0]
  i2556.PointSize = i2557[1]
  i2556.Scale = i2557[2]
  i2556.CharacterCount = i2557[3]
  i2556.LineHeight = i2557[4]
  i2556.Baseline = i2557[5]
  i2556.Ascender = i2557[6]
  i2556.CapHeight = i2557[7]
  i2556.Descender = i2557[8]
  i2556.CenterLine = i2557[9]
  i2556.SuperscriptOffset = i2557[10]
  i2556.SubscriptOffset = i2557[11]
  i2556.SubSize = i2557[12]
  i2556.Underline = i2557[13]
  i2556.UnderlineThickness = i2557[14]
  i2556.strikethrough = i2557[15]
  i2556.strikethroughThickness = i2557[16]
  i2556.TabWidth = i2557[17]
  i2556.Padding = i2557[18]
  i2556.AtlasWidth = i2557[19]
  i2556.AtlasHeight = i2557[20]
  return i2556
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2560 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2561 = data
  i2560.id = i2561[0]
  i2560.x = i2561[1]
  i2560.y = i2561[2]
  i2560.width = i2561[3]
  i2560.height = i2561[4]
  i2560.xOffset = i2561[5]
  i2560.yOffset = i2561[6]
  i2560.xAdvance = i2561[7]
  i2560.scale = i2561[8]
  return i2560
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.KerningTable' )
  var i2563 = data
  var i2565 = i2563[0]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('TMPro.KerningPair', i2565[i + 0]));
  }
  i2562.kerningPairs = i2564
  return i2562
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.KerningPair' )
  var i2569 = data
  i2568.xOffset = i2569[0]
  i2568.m_FirstGlyph = i2569[1]
  i2568.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2569[2], i2568.m_FirstGlyphAdjustments)
  i2568.m_SecondGlyph = i2569[3]
  i2568.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2569[4], i2568.m_SecondGlyphAdjustments)
  i2568.m_IgnoreSpacingAdjustments = !!i2569[5]
  return i2568
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2571 = data
  var i2573 = i2571[0]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2573[i + 0]));
  }
  i2570.m_GlyphPairAdjustmentRecords = i2572
  return i2570
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2577 = data
  i2576.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2577[0], i2576.m_FirstAdjustmentRecord)
  i2576.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2577[1], i2576.m_SecondAdjustmentRecord)
  i2576.m_FeatureLookupFlags = i2577[2]
  return i2576
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2579 = data
  i2578.m_GlyphIndex = i2579[0]
  i2578.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2579[1], i2578.m_GlyphValueRecord)
  return i2578
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2581 = data
  i2580.m_XPlacement = i2581[0]
  i2580.m_YPlacement = i2581[1]
  i2580.m_XAdvance = i2581[2]
  i2580.m_YAdvance = i2581[3]
  return i2580
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2585 = data
  i2584.sourceFontFileName = i2585[0]
  i2584.sourceFontFileGUID = i2585[1]
  i2584.pointSizeSamplingMode = i2585[2]
  i2584.pointSize = i2585[3]
  i2584.padding = i2585[4]
  i2584.packingMode = i2585[5]
  i2584.atlasWidth = i2585[6]
  i2584.atlasHeight = i2585[7]
  i2584.characterSetSelectionMode = i2585[8]
  i2584.characterSequence = i2585[9]
  i2584.referencedFontAssetGUID = i2585[10]
  i2584.referencedTextAssetGUID = i2585[11]
  i2584.fontStyle = i2585[12]
  i2584.fontStyleModifier = i2585[13]
  i2584.renderMode = i2585[14]
  i2584.includeFontFeatures = !!i2585[15]
  return i2584
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'regularTypeface')
  request.r(i2589[2], i2589[3], 0, i2588, 'italicTypeface')
  return i2588
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 1, i2592, '')
  }
  i2590.components = i2592
  return i2590
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2597 = data
  i2596.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2597[0], i2596.mode)
  i2596.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2597[1], i2596.neutralHDRRangeReductionMode)
  i2596.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2597[2], i2596.acesPreset)
  i2596.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2597[3], i2596.hueShiftAmount)
  i2596.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2597[4], i2596.detectPaperWhite)
  i2596.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2597[5], i2596.paperWhite)
  i2596.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2597[6], i2596.detectBrightnessLimits)
  i2596.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2597[7], i2596.minNits)
  i2596.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2597[8], i2596.maxNits)
  i2596.active = !!i2597[9]
  return i2596
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2599 = data
  i2598.m_Value = i2599[0]
  i2598.m_OverrideState = !!i2599[1]
  return i2598
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2601 = data
  i2600.m_Value = i2601[0]
  i2600.m_OverrideState = !!i2601[1]
  return i2600
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2603 = data
  i2602.m_Value = i2603[0]
  i2602.m_OverrideState = !!i2603[1]
  return i2602
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2605 = data
  i2604.m_Value = i2605[0]
  i2604.m_OverrideState = !!i2605[1]
  return i2604
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2607 = data
  i2606.m_Value = !!i2607[0]
  i2606.m_OverrideState = !!i2607[1]
  return i2606
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2609 = data
  i2608.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2609[0], i2608.skipIterations)
  i2608.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2609[1], i2608.threshold)
  i2608.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2609[2], i2608.intensity)
  i2608.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2609[3], i2608.scatter)
  i2608.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2609[4], i2608.clamp)
  i2608.tint = request.d('UnityEngine.Rendering.ColorParameter', i2609[5], i2608.tint)
  i2608.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2609[6], i2608.highQualityFiltering)
  i2608.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2609[7], i2608.downscale)
  i2608.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2609[8], i2608.maxIterations)
  i2608.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2609[9], i2608.dirtTexture)
  i2608.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2609[10], i2608.dirtIntensity)
  i2608.active = !!i2609[11]
  return i2608
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2611 = data
  i2610.m_Value = i2611[0]
  i2610.m_OverrideState = !!i2611[1]
  return i2610
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2613 = data
  i2612.m_Value = i2613[0]
  i2612.m_OverrideState = !!i2613[1]
  return i2612
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2615 = data
  i2614.m_Value = new pc.Color(i2615[0], i2615[1], i2615[2], i2615[3])
  i2614.m_OverrideState = !!i2615[4]
  return i2614
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2617 = data
  i2616.m_Value = i2617[0]
  i2616.m_OverrideState = !!i2617[1]
  return i2616
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2619 = data
  i2618.dimension = i2619[0]
  request.r(i2619[1], i2619[2], 0, i2618, 'm_Value')
  i2618.m_OverrideState = !!i2619[3]
  return i2618
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2621 = data
  i2620.color = request.d('UnityEngine.Rendering.ColorParameter', i2621[0], i2620.color)
  i2620.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2621[1], i2620.center)
  i2620.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2621[2], i2620.intensity)
  i2620.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2621[3], i2620.smoothness)
  i2620.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2621[4], i2620.rounded)
  i2620.active = !!i2621[5]
  return i2620
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2623 = data
  i2622.m_Value = new pc.Vec2( i2623[0], i2623[1] )
  i2622.m_OverrideState = !!i2623[2]
  return i2622
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2624 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2625 = data
  i2624.useSafeMode = !!i2625[0]
  i2624.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2625[1], i2624.safeModeOptions)
  i2624.timeScale = i2625[2]
  i2624.unscaledTimeScale = i2625[3]
  i2624.useSmoothDeltaTime = !!i2625[4]
  i2624.maxSmoothUnscaledTime = i2625[5]
  i2624.rewindCallbackMode = i2625[6]
  i2624.showUnityEditorReport = !!i2625[7]
  i2624.logBehaviour = i2625[8]
  i2624.drawGizmos = !!i2625[9]
  i2624.defaultRecyclable = !!i2625[10]
  i2624.defaultAutoPlay = i2625[11]
  i2624.defaultUpdateType = i2625[12]
  i2624.defaultTimeScaleIndependent = !!i2625[13]
  i2624.defaultEaseType = i2625[14]
  i2624.defaultEaseOvershootOrAmplitude = i2625[15]
  i2624.defaultEasePeriod = i2625[16]
  i2624.defaultAutoKill = !!i2625[17]
  i2624.defaultLoopType = i2625[18]
  i2624.debugMode = !!i2625[19]
  i2624.debugStoreTargetId = !!i2625[20]
  i2624.showPreviewPanel = !!i2625[21]
  i2624.storeSettingsLocation = i2625[22]
  i2624.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2625[23], i2624.modules)
  i2624.createASMDEF = !!i2625[24]
  i2624.showPlayingTweens = !!i2625[25]
  i2624.showPausedTweens = !!i2625[26]
  return i2624
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2626 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2627 = data
  i2626.logBehaviour = i2627[0]
  i2626.nestedTweenFailureBehaviour = i2627[1]
  return i2626
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2628 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2629 = data
  i2628.showPanel = !!i2629[0]
  i2628.audioEnabled = !!i2629[1]
  i2628.physicsEnabled = !!i2629[2]
  i2628.physics2DEnabled = !!i2629[3]
  i2628.spriteEnabled = !!i2629[4]
  i2628.uiEnabled = !!i2629[5]
  i2628.textMeshProEnabled = !!i2629[6]
  i2628.tk2DEnabled = !!i2629[7]
  i2628.deAudioEnabled = !!i2629[8]
  i2628.deUnityExtendedEnabled = !!i2629[9]
  i2628.epoOutlineEnabled = !!i2629[10]
  return i2628
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.TMP_Settings' )
  var i2631 = data
  i2630.m_enableWordWrapping = !!i2631[0]
  i2630.m_enableKerning = !!i2631[1]
  i2630.m_enableExtraPadding = !!i2631[2]
  i2630.m_enableTintAllSprites = !!i2631[3]
  i2630.m_enableParseEscapeCharacters = !!i2631[4]
  i2630.m_EnableRaycastTarget = !!i2631[5]
  i2630.m_GetFontFeaturesAtRuntime = !!i2631[6]
  i2630.m_missingGlyphCharacter = i2631[7]
  i2630.m_warningsDisabled = !!i2631[8]
  request.r(i2631[9], i2631[10], 0, i2630, 'm_defaultFontAsset')
  i2630.m_defaultFontAssetPath = i2631[11]
  i2630.m_defaultFontSize = i2631[12]
  i2630.m_defaultAutoSizeMinRatio = i2631[13]
  i2630.m_defaultAutoSizeMaxRatio = i2631[14]
  i2630.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2631[15], i2631[16] )
  i2630.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2631[17], i2631[18] )
  i2630.m_autoSizeTextContainer = !!i2631[19]
  i2630.m_IsTextObjectScaleStatic = !!i2631[20]
  var i2633 = i2631[21]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2633.length; i += 2) {
  request.r(i2633[i + 0], i2633[i + 1], 1, i2632, '')
  }
  i2630.m_fallbackFontAssets = i2632
  i2630.m_matchMaterialPreset = !!i2631[22]
  request.r(i2631[23], i2631[24], 0, i2630, 'm_defaultSpriteAsset')
  i2630.m_defaultSpriteAssetPath = i2631[25]
  i2630.m_enableEmojiSupport = !!i2631[26]
  i2630.m_MissingCharacterSpriteUnicode = i2631[27]
  i2630.m_defaultColorGradientPresetsPath = i2631[28]
  request.r(i2631[29], i2631[30], 0, i2630, 'm_defaultStyleSheet')
  i2630.m_StyleSheetsResourcePath = i2631[31]
  request.r(i2631[32], i2631[33], 0, i2630, 'm_leadingCharacters')
  request.r(i2631[34], i2631[35], 0, i2630, 'm_followingCharacters')
  i2630.m_UseModernHangulLineBreakingRules = !!i2631[36]
  return i2630
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2635 = data
  i2634.hashCode = i2635[0]
  request.r(i2635[1], i2635[2], 0, i2634, 'material')
  i2634.materialHashCode = i2635[3]
  request.r(i2635[4], i2635[5], 0, i2634, 'spriteSheet')
  var i2637 = i2635[6]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('TMPro.TMP_Sprite', i2637[i + 0]));
  }
  i2634.spriteInfoList = i2636
  var i2639 = i2635[7]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 1, i2638, '')
  }
  i2634.fallbackSpriteAssets = i2638
  i2634.m_Version = i2635[8]
  i2634.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2635[9], i2634.m_FaceInfo)
  var i2641 = i2635[10]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('TMPro.TMP_SpriteCharacter', i2641[i + 0]));
  }
  i2634.m_SpriteCharacterTable = i2640
  var i2643 = i2635[11]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.TMP_SpriteGlyph', i2643[i + 0]));
  }
  i2634.m_SpriteGlyphTable = i2642
  return i2634
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.hashCode = i2647[1]
  i2646.unicode = i2647[2]
  i2646.pivot = new pc.Vec2( i2647[3], i2647[4] )
  request.r(i2647[5], i2647[6], 0, i2646, 'sprite')
  i2646.id = i2647[7]
  i2646.x = i2647[8]
  i2646.y = i2647[9]
  i2646.width = i2647[10]
  i2646.height = i2647[11]
  i2646.xOffset = i2647[12]
  i2646.yOffset = i2647[13]
  i2646.xAdvance = i2647[14]
  i2646.scale = i2647[15]
  return i2646
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2653 = data
  i2652.m_Name = i2653[0]
  i2652.m_HashCode = i2653[1]
  i2652.m_ElementType = i2653[2]
  i2652.m_Unicode = i2653[3]
  i2652.m_GlyphIndex = i2653[4]
  i2652.m_Scale = i2653[5]
  return i2652
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2657 = data
  request.r(i2657[0], i2657[1], 0, i2656, 'sprite')
  i2656.m_Index = i2657[2]
  i2656.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2657[3], i2656.m_Metrics)
  i2656.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2657[4], i2656.m_GlyphRect)
  i2656.m_Scale = i2657[5]
  i2656.m_AtlasIndex = i2657[6]
  i2656.m_ClassDefinitionType = i2657[7]
  return i2656
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2659 = data
  var i2661 = i2659[0]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.add(request.d('TMPro.TMP_Style', i2661[i + 0]));
  }
  i2658.m_StyleList = i2660
  return i2658
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_Style' )
  var i2665 = data
  i2664.m_Name = i2665[0]
  i2664.m_HashCode = i2665[1]
  i2664.m_OpeningDefinition = i2665[2]
  i2664.m_ClosingDefinition = i2665[3]
  i2664.m_OpeningTagArray = i2665[4]
  i2664.m_ClosingTagArray = i2665[5]
  i2664.m_OpeningTagUnicodeArray = i2665[6]
  i2664.m_ClosingTagUnicodeArray = i2665[7]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2667 = data
  var i2669 = i2667[0]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2669[i + 0]) );
  }
  i2666.files = i2668
  i2666.componentToPrefabIds = i2667[1]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2673 = data
  i2672.path = i2673[0]
  request.r(i2673[1], i2673[2], 0, i2672, 'unityObject')
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2677[i + 0]) );
  }
  i2674.scriptsExecutionOrder = i2676
  var i2679 = i2675[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2679[i + 0]) );
  }
  i2674.sortingLayers = i2678
  var i2681 = i2675[2]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2681[i + 0]) );
  }
  i2674.cullingLayers = i2680
  i2674.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2675[3], i2674.timeSettings)
  i2674.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2675[4], i2674.physicsSettings)
  i2674.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2675[5], i2674.physics2DSettings)
  i2674.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2675[6], i2674.qualitySettings)
  i2674.enableRealtimeShadows = !!i2675[7]
  i2674.enableAutoInstancing = !!i2675[8]
  i2674.enableDynamicBatching = !!i2675[9]
  i2674.lightmapEncodingQuality = i2675[10]
  i2674.desiredColorSpace = i2675[11]
  var i2683 = i2675[12]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( i2683[i + 0] );
  }
  i2674.allTags = i2682
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.value = i2687[1]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2691 = data
  i2690.id = i2691[0]
  i2690.name = i2691[1]
  i2690.value = i2691[2]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2695 = data
  i2694.id = i2695[0]
  i2694.name = i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2697 = data
  i2696.fixedDeltaTime = i2697[0]
  i2696.maximumDeltaTime = i2697[1]
  i2696.timeScale = i2697[2]
  i2696.maximumParticleTimestep = i2697[3]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2699 = data
  i2698.gravity = new pc.Vec3( i2699[0], i2699[1], i2699[2] )
  i2698.defaultSolverIterations = i2699[3]
  i2698.bounceThreshold = i2699[4]
  i2698.autoSyncTransforms = !!i2699[5]
  i2698.autoSimulation = !!i2699[6]
  var i2701 = i2699[7]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2701[i + 0]) );
  }
  i2698.collisionMatrix = i2700
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2705 = data
  i2704.enabled = !!i2705[0]
  i2704.layerId = i2705[1]
  i2704.otherLayerId = i2705[2]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'material')
  i2706.gravity = new pc.Vec2( i2707[2], i2707[3] )
  i2706.positionIterations = i2707[4]
  i2706.velocityIterations = i2707[5]
  i2706.velocityThreshold = i2707[6]
  i2706.maxLinearCorrection = i2707[7]
  i2706.maxAngularCorrection = i2707[8]
  i2706.maxTranslationSpeed = i2707[9]
  i2706.maxRotationSpeed = i2707[10]
  i2706.baumgarteScale = i2707[11]
  i2706.baumgarteTOIScale = i2707[12]
  i2706.timeToSleep = i2707[13]
  i2706.linearSleepTolerance = i2707[14]
  i2706.angularSleepTolerance = i2707[15]
  i2706.defaultContactOffset = i2707[16]
  i2706.autoSimulation = !!i2707[17]
  i2706.queriesHitTriggers = !!i2707[18]
  i2706.queriesStartInColliders = !!i2707[19]
  i2706.callbacksOnDisable = !!i2707[20]
  i2706.reuseCollisionCallbacks = !!i2707[21]
  i2706.autoSyncTransforms = !!i2707[22]
  var i2709 = i2707[23]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2709[i + 0]) );
  }
  i2706.collisionMatrix = i2708
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2713 = data
  i2712.enabled = !!i2713[0]
  i2712.layerId = i2713[1]
  i2712.otherLayerId = i2713[2]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2715 = data
  var i2717 = i2715[0]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2717[i + 0]) );
  }
  i2714.qualityLevels = i2716
  var i2719 = i2715[1]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( i2719[i + 0] );
  }
  i2714.names = i2718
  i2714.shadows = i2715[2]
  i2714.anisotropicFiltering = i2715[3]
  i2714.antiAliasing = i2715[4]
  i2714.lodBias = i2715[5]
  i2714.shadowCascades = i2715[6]
  i2714.shadowDistance = i2715[7]
  i2714.shadowmaskMode = i2715[8]
  i2714.shadowProjection = i2715[9]
  i2714.shadowResolution = i2715[10]
  i2714.softParticles = !!i2715[11]
  i2714.softVegetation = !!i2715[12]
  i2714.activeColorSpace = i2715[13]
  i2714.desiredColorSpace = i2715[14]
  i2714.masterTextureLimit = i2715[15]
  i2714.maxQueuedFrames = i2715[16]
  i2714.particleRaycastBudget = i2715[17]
  i2714.pixelLightCount = i2715[18]
  i2714.realtimeReflectionProbes = !!i2715[19]
  i2714.shadowCascade2Split = i2715[20]
  i2714.shadowCascade4Split = new pc.Vec3( i2715[21], i2715[22], i2715[23] )
  i2714.streamingMipmapsActive = !!i2715[24]
  i2714.vSyncCount = i2715[25]
  i2714.asyncUploadBufferSize = i2715[26]
  i2714.asyncUploadTimeSlice = i2715[27]
  i2714.billboardsFaceCameraPosition = !!i2715[28]
  i2714.shadowNearPlaneOffset = i2715[29]
  i2714.streamingMipmapsMemoryBudget = i2715[30]
  i2714.maximumLODLevel = i2715[31]
  i2714.streamingMipmapsAddAllCameras = !!i2715[32]
  i2714.streamingMipmapsMaxLevelReduction = i2715[33]
  i2714.streamingMipmapsRenderersPerFrame = i2715[34]
  i2714.resolutionScalingFixedDPIFactor = i2715[35]
  i2714.streamingMipmapsMaxFileIORequests = i2715[36]
  i2714.currentQualityLevel = i2715[37]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2725 = data
  i2724.weight = i2725[0]
  i2724.vertices = i2725[1]
  i2724.normals = i2725[2]
  i2724.tangents = i2725[3]
  return i2724
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2727 = data
  i2726.xPlacement = i2727[0]
  i2726.yPlacement = i2727[1]
  i2726.xAdvance = i2727[2]
  i2726.yAdvance = i2727[3]
  return i2726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[102],"103":[25],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[113],"114":[113],"115":[113],"116":[113],"117":[113],"118":[113],"119":[113],"120":[113],"121":[113],"122":[113],"123":[113],"124":[113],"125":[113],"126":[25],"127":[5],"128":[129],"130":[129],"35":[11],"131":[14,12,11],"64":[11],"132":[25],"27":[25],"29":[28],"133":[134],"135":[11],"136":[11],"37":[35],"40":[14,11],"137":[11],"36":[35],"45":[11],"138":[11],"71":[11],"139":[11],"50":[11],"140":[11],"44":[11],"53":[11],"141":[11],"38":[14,11],"142":[11],"52":[11],"49":[11],"143":[11],"48":[14,11],"57":[11],"144":[33],"145":[33],"34":[33],"146":[33],"147":[25],"148":[25],"149":[134],"150":[11],"151":[5,11],"23":[11,14],"152":[11],"153":[14,11],"154":[5],"155":[14,11],"156":[11],"157":[134]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Slot","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","Stuff","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CanvasRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.CanvasGroup","GameManager","GridManager","UnityEngine.GameObject","DragAndDropManager","UIManager","TMPro.TextMeshProUGUI","EffectsManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RawImage","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 06:03:32";

Deserializers.lunaDaysRunning = "1.7";

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

Deserializers.buildID = "5f707dc7-f5d0-4d64-a781-7b640b244424";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

